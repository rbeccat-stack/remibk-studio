'use client'

import { useCallback, useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import { ConversationProvider, useConversation } from '@elevenlabs/react'
import { agent } from '@/lib/content'
import { resolveAgentSource } from '@/lib/agentSource'

type Line = { id: number; role: 'user' | 'agent'; text: string }
type Kind = 'voice' | 'text'

const BARS = 32
const c = agent.page.console
// Silhouette de repos des barres : une onde douce, figée (valeurs arrondies, identiques serveur/client).
const REST = Array.from({ length: BARS }, (_, i) => `${(14 + 22 * Math.abs(Math.sin(i * 0.45))).toFixed(1)}%`)

// Transforme les liens [libellé](url) du texte en <a>.
function renderText(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!match) return part
    return (
      <a
        key={i}
        href={match[2]}
        className="text-fg-secondary underline underline-offset-2 decoration-fg-subtle transition-colors duration-200 hover:text-fg"
      >
        {match[1]}
      </a>
    )
  })
}

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
      {children}
    </svg>
  )
}

const PhoneIcon = () => (
  <Icon>
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />
  </Icon>
)

const PenIcon = () => (
  <Icon>
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" />
  </Icon>
)

const chipClass =
  'min-h-9 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-[13px] text-fg-secondary transition-colors duration-200 ease-quart hover:border-border-strong hover:text-fg'

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

// Console d'appel intégrée à la page /agent : remplace le widget flottant ElevenLabs.
export default function AgentConsole() {
  return (
    <ConversationProvider>
      <Console />
    </ConversationProvider>
  )
}

function Console() {
  const pathname = usePathname()
  const conversation = useConversation()
  const { status, isSpeaking, startSession, endSession, sendUserMessage } = conversation

  const [kind, setKind] = useState<Kind>('voice')
  const [lines, setLines] = useState<Line[]>([])
  const [notice, setNotice] = useState<string | null>(null)
  const [hasConnected, setHasConnected] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [draft, setDraft] = useState('')

  const nextId = useRef(0)
  // Question choisie avant l'appel : envoyée dès que l'agent a fini de se présenter.
  const pendingRef = useRef<string | null>(null)
  const transcriptRef = useRef<HTMLDivElement>(null)
  const barsRef = useRef<(HTMLSpanElement | null)[]>([])
  const convRef = useRef(conversation)
  useEffect(() => {
    convRef.current = conversation
  })

  const connected = status === 'connected'
  const connecting = status === 'connecting'

  const addLine = useCallback((role: Line['role'], text: string) => {
    const clean = text.trim()
    if (!clean || clean === '...') return
    setLines((prev) => {
      const last = prev[prev.length - 1]
      // Le message écrit est affiché à l'envoi : on ignore un éventuel écho identique.
      if (last && last.role === role && last.text === clean) return prev
      return [...prev, { id: nextId.current++, role, text: clean }]
    })
  }, [])

  const start = useCallback(
    async (next: Kind) => {
      setNotice(null)
      setLines([])
      setElapsed(0)
      setKind(next)

      if (next === 'voice') {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
          stream.getTracks().forEach((t) => t.stop())
        } catch {
          setNotice(c.micDenied)
          return
        }
      }

      startSession({
        agentId: agent.agentId,
        connectionType: next === 'voice' ? 'webrtc' : 'websocket',
        textOnly: next === 'text',
        dynamicVariables: { source: resolveAgentSource(pathname) },
        onConnect: () => setHasConnected(true),
        onMessage: ({ role, message }) => {
          addLine(role === 'user' ? 'user' : 'agent', message)
          const pending = pendingRef.current
          if (role !== 'user' && pending) {
            pendingRef.current = null
            addLine('user', pending)
            convRef.current.sendUserMessage(pending)
          }
        },
        onError: () => setNotice(c.error),
      })
    },
    [addLine, pathname, startSession],
  )

  const ask = useCallback(
    (question: string) => {
      pendingRef.current = question
      void start('text')
    },
    [start],
  )

  const send = useCallback(
    (text: string) => {
      const clean = text.trim()
      if (!clean || !connected) return
      addLine('user', clean)
      sendUserMessage(clean)
    },
    [addLine, connected, sendUserMessage],
  )

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    send(draft)
    setDraft('')
  }

  // Chronomètre de l'appel.
  useEffect(() => {
    if (!connected) return
    const timer = setInterval(() => setElapsed((s) => s + 1), 1000)
    return () => clearInterval(timer)
  }, [connected])

  // Défilement du transcript vers le dernier message.
  useEffect(() => {
    const el = transcriptRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [lines])

  // Raccroche si l'on quitte la page en plein appel.
  useEffect(
    () => () => {
      try {
        convRef.current.endSession()
      } catch {
        // Aucune session ouverte.
      }
    },
    [],
  )

  // Barres de voix : fréquences de la voix de l'agent quand il parle, du micro sinon.
  // Écrites directement dans le DOM (pas de re-rendu React à chaque image).
  useEffect(() => {
    const bars = barsRef.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!connected || kind !== 'voice' || reduce) {
      bars.forEach((bar, i) => bar && (bar.style.height = REST[i]))
      return
    }
    let frame = 0
    const tick = () => {
      const conv = convRef.current
      const data = conv.isSpeaking ? conv.getOutputByteFrequencyData() : conv.getInputByteFrequencyData()
      if (data && data.length) {
        const step = Math.max(1, Math.floor(data.length / BARS))
        for (let i = 0; i < BARS; i++) {
          let sum = 0
          for (let j = 0; j < step; j++) sum += data[i * step + j] ?? 0
          const level = sum / step / 255
          const bar = bars[i]
          if (bar) bar.style.height = `${Math.round(Math.max(8, Math.min(100, level * 160)))}%`
        }
      }
      frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [connected, kind])

  const statusText = connecting
    ? c.status.connecting
    : connected
      ? kind === 'text'
        ? c.status.text
        : isSpeaking
          ? c.status.speaking
          : c.status.listening
      : status === 'error'
        ? c.status.error
        : hasConnected
          ? c.status.ended
          : c.status.idle

  const dotClass = connected ? (isSpeaking ? 'dot-accent' : 'dot-green') : connecting ? 'dot-amber' : 'dot-off'
  const barColor = connected && isSpeaking ? 'bg-accent-ink' : connected ? 'bg-green' : 'bg-border-strong'

  return (
    <div className="relative w-full">
      {/* Halo indigo derrière la console, comme la fenêtre de l'accueil */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-y-10 inset-x-0 bg-[radial-gradient(ellipse_at_center,rgba(94,106,210,0.2),transparent_65%)] blur-2xl"
      />

      <section
        aria-label="Console d'appel de l'agent"
        className="relative flex flex-col overflow-hidden rounded-2xl border border-border-strong bg-panel shadow-floating"
      >
        {/* Barre de titre */}
        <div className="relative flex h-9 items-center gap-1.5 border-b border-border px-3.5">
          {[0, 1, 2].map((i) => (
            <span key={i} aria-hidden className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          ))}
          <span aria-hidden className="absolute inset-x-0 text-center font-mono text-[11px] text-fg-muted">
            {c.file}
          </span>
          <span className="ml-auto font-mono text-[11px] tabular-nums text-fg-muted" aria-label="Durée de l'appel">
            {formatTime(elapsed)}
          </span>
        </div>

        {/* Statut + barres de voix */}
        <div className="border-b border-border px-5 pt-4 pb-5">
          <p className="flex items-center gap-2 text-sm text-fg" role="status" aria-live="polite">
            <span aria-hidden className={`dot ${dotClass} h-2 w-2 ${connected ? 'animate-pulse' : ''}`} />
            {statusText}
          </p>
          <div aria-hidden className="mt-4 flex h-14 items-center gap-[3px]">
            {Array.from({ length: BARS }, (_, i) => (
              <span
                key={i}
                ref={(el) => {
                  barsRef.current[i] = el
                }}
                className={`min-h-1 flex-1 rounded-full transition-[background-color] duration-300 ${barColor}`}
                style={{ height: REST[i] }}
              />
            ))}
          </div>
        </div>

        {/* Transcript */}
        <div
          ref={transcriptRef}
          className={`flex flex-col gap-3 px-5 py-5 ${lines.length === 0 ? 'min-h-[240px] justify-center' : 'h-[300px] overflow-y-auto'}`}
          aria-live="polite"
          aria-label="Transcription de la conversation"
        >
          {lines.length === 0 ? (
            <div>
              <p className="text-sm leading-relaxed text-fg-muted">{notice ?? (connecting ? c.status.connecting : c.intro)}</p>
              {!connected && !connecting && (
                <>
                  <p className="mt-5 font-mono text-[11px] text-fg-muted">{c.askLabel}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {c.suggestions.map((q) => (
                      <button key={q} type="button" onClick={() => ask(q)} className={chipClass}>
                        {q}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            lines.map((line) => (
              <div key={line.id} className={`flex flex-col gap-1 ${line.role === 'user' ? 'items-end' : 'items-start'}`}>
                <span className="font-mono text-[11px] text-fg-muted">{line.role === 'user' ? c.you : c.agent}</span>
                <p
                  className={`max-w-[88%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    line.role === 'user' ? 'bg-accent/15 text-fg' : 'bg-surface text-fg-secondary'
                  }`}
                >
                  {line.text}
                </p>
              </div>
            ))
          )}
          {lines.length > 0 && notice && <p className="text-sm text-fg-muted">{notice}</p>}
        </div>

        {/* Saisie écrite et questions fréquentes, pendant l'appel */}
        {connected && (
          <div className="border-t border-border px-5 pt-4">
            <p className="font-mono text-[11px] text-fg-muted">{c.suggestionsLabel}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {c.suggestions.map((q) => (
                <button key={q} type="button" onClick={() => send(q)} className={chipClass}>
                  {q}
                </button>
              ))}
            </div>
            <form onSubmit={onSubmit} className="mt-3 flex gap-2">
              <label htmlFor="agent-input" className="sr-only">
                {c.inputLabel}
              </label>
              <input
                id="agent-input"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder={c.inputPlaceholder}
                autoComplete="off"
                className="min-h-11 min-w-0 flex-1 rounded-full border border-border bg-bg-base px-4 text-sm text-fg placeholder:text-fg-subtle focus:border-border-strong focus:outline-none"
              />
              <button type="submit" disabled={!draft.trim()} className="key-chassis min-h-11 rounded-full px-4 text-sm disabled:opacity-40">
                {c.send}
              </button>
            </form>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-3 px-5 py-4">
          {connected || connecting ? (
            <button
              type="button"
              onClick={() => endSession()}
              disabled={connecting}
              className="key-chassis inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm disabled:opacity-60"
            >
              <span aria-hidden className="dot h-2 w-2 bg-[#eb5757]" />
              {c.hangUp}
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={() => start('voice')}
                className="key-primary inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-[15px]"
              >
                <PhoneIcon />
                {hasConnected ? c.restart : c.call}
              </button>
              <button
                type="button"
                onClick={() => start('text')}
                className="key-chassis inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-[15px]"
              >
                <PenIcon />
                {c.write}
              </button>
            </>
          )}
        </div>
      </section>

      <p className="relative mt-4 text-[13px] leading-relaxed text-fg-muted">{renderText(c.privacy)}</p>
    </div>
  )
}
