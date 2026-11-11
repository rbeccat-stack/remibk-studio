'use client'

import { useEffect, useRef, useState } from 'react'
import type { curlPage } from '@/lib/content'
import {
  endpoints,
  guessEndpoint,
  snippet,
  toolGroups,
  type EndpointId,
  type ToolId,
} from '@/lib/remi-endpoints'

type Texts = typeof curlPage

type Message =
  | { kind: 'user'; text: string }
  | {
      kind: 'call'
      id: EndpointId
      pick?: 'known_bugs'
      status?: number
      body?: string
      error?: boolean
    }

const allTools = toolGroups.flatMap((g) => g.tools)

// Interface façon « connecter un outil » : choix de l'outil, commande à copier, démo qui appelle la vraie API.
export default function ApiConsole({ texts }: { texts: Texts }) {
  const [tool, setTool] = useState<ToolId>('curl')
  const [endpoint, setEndpoint] = useState<EndpointId>('profile')
  const [copied, setCopied] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([])
  const [busy, setBusy] = useState(false)
  const [placeholder, setPlaceholder] = useState(texts.placeholders[0])
  const logRef = useRef<HTMLDivElement>(null)

  const command = snippet(tool, endpoint)
  const toolName = allTools.find((t) => t.id === tool)?.name ?? tool

  // Placeholder qui se tape tout seul, comme une invite (désactivé si l'utilisateur réduit les animations).
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let phrase = 0
    let char = 0
    let deleting = false
    const timer = window.setInterval(() => {
      const target = texts.placeholders[phrase]
      if (!deleting) {
        char++
        if (char > target.length + 18) deleting = true // petite pause une fois la phrase écrite
      } else {
        char -= 2
        if (char <= 0) {
          char = 0
          deleting = false
          phrase = (phrase + 1) % texts.placeholders.length
        }
      }
      setPlaceholder(texts.placeholders[phrase].slice(0, Math.min(char, texts.placeholders[phrase].length)))
    }, 70)
    return () => window.clearInterval(timer)
  }, [texts.placeholders])

  // Fait défiler le journal de la démo (pas la page) jusqu'à la dernière question, pour la garder visible avec sa réponse.
  useEffect(() => {
    const el = logRef.current
    const last = el?.querySelectorAll<HTMLElement>('[data-question]')
    const target = last?.[last.length - 1]
    if (el && target) el.scrollTop = target.offsetTop - 16
  }, [messages])

  async function copy() {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      /* presse-papiers indisponible : on ne fait rien */
    }
  }

  async function ask(question: string) {
    const text = question.trim()
    if (!text || busy) return
    const id = guessEndpoint(text)
    const pick = /d[ée]faut|bug|faiblesse/i.test(text) ? ('known_bugs' as const) : undefined
    const index = messages.length + 1
    setInput('')
    setBusy(true)
    setMessages((m) => [...m, { kind: 'user', text }, { kind: 'call', id, pick }])

    let update: Partial<Extract<Message, { kind: 'call' }>>
    try {
      const { method, path } = endpoints[id]
      const res = await fetch(path, { method })
      const data = await res.json()
      const shown = pick ? { known_bugs: data.known_bugs } : data
      update = { status: res.status, body: JSON.stringify(shown, null, 2) }
    } catch {
      update = { error: true, body: 'Erreur réseau : réessayez dans un instant.' }
    }
    // Laisse le « J'y travaille… » visible un court instant, comme un vrai appel d'outil.
    window.setTimeout(() => {
      setMessages((m) => m.map((msg, i) => (i === index && msg.kind === 'call' ? { ...msg, ...update } : msg)))
      setBusy(false)
    }, 450)
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-panel shadow-card">
      <div className="grid grid-cols-1 md:grid-cols-[210px_1fr]">
        {/* Choix de l'outil : colonne sur desktop, rangée défilante sur mobile */}
        <aside className="min-w-0 border-b border-border p-3 md:border-b-0 md:border-r md:p-4">
          <nav aria-label="Choisir un outil" className="flex gap-2 overflow-x-auto md:flex-col md:gap-5 md:overflow-visible">
            {toolGroups.map((group) => (
              <div key={group.title} className="flex shrink-0 gap-2 md:flex-col md:gap-1">
                <p className="hidden px-2 pb-1 font-mono text-[11px] text-fg-muted md:block">{group.title}</p>
                {group.tools.map((t) => {
                  const active = t.id === tool
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTool(t.id)}
                      aria-pressed={active}
                      className={`flex min-h-11 shrink-0 items-center gap-3 rounded-xl px-2.5 text-sm transition-colors duration-200 ease-quart ${
                        active
                          ? 'bg-accent/15 text-fg ring-1 ring-inset ring-accent/40'
                          : 'text-fg-secondary hover:bg-white/5 hover:text-fg'
                      }`}
                    >
                      <span
                        aria-hidden
                        className={`flex h-7 w-7 items-center justify-center rounded-lg border font-mono text-[10px] ${
                          active ? 'border-accent/50 bg-accent/20 text-fg' : 'border-border-strong bg-surface text-fg-muted'
                        }`}
                      >
                        {t.icon}
                      </span>
                      {t.name}
                    </button>
                  )
                })}
              </div>
            ))}
          </nav>
        </aside>

        <div className="min-w-0">
          {/* En-tête : titre + choix de la route */}
          <div className="flex flex-col gap-3 border-b border-border p-4 sm:flex-row sm:items-center sm:justify-between md:p-5">
            <div className="flex items-center gap-3">
              <span
                aria-hidden
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-border-strong bg-surface font-mono text-xs text-accent-ink"
              >
                {'{ }'}
              </span>
              <p className="font-medium text-fg">{texts.windowTitle}</p>
            </div>
            <div role="group" aria-label="Choisir une route" className="flex rounded-full border border-border bg-bg-base p-1">
              {(Object.keys(endpoints) as EndpointId[]).map((id) => {
                const active = id === endpoint
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setEndpoint(id)}
                    aria-pressed={active}
                    className={`min-h-9 flex-1 rounded-full px-4 text-sm transition-colors duration-200 ease-quart ${
                      active ? 'bg-fg font-medium text-bg-base' : 'text-fg-muted hover:text-fg'
                    }`}
                  >
                    {endpoints[id].label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Lancer : la commande à copier */}
          <section className="border-b border-border p-4 md:p-5">
            <div className="flex flex-col gap-1">
              <h2 className="font-medium text-fg">{texts.installTitle}</h2>
              <p className="text-sm text-fg-muted">{texts.installText}</p>
              <p className="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] text-fg-muted">
                {texts.installBadges.map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <span aria-hidden className="dot dot-green h-1.5 w-1.5" />
                    {b}
                  </span>
                ))}
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-stretch">
              <pre className="min-w-0 flex-1 overflow-x-auto rounded-xl border border-border bg-bg-base px-4 py-3 font-mono text-[13px] leading-relaxed text-fg-secondary">
                {tool !== 'browser' && tool !== 'javascript' && tool !== 'python' && (
                  <span aria-hidden className="select-none text-accent-ink">$ </span>
                )}
                {command}
              </pre>
              {tool === 'browser' ? (
                <a
                  href={command}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="key-primary inline-flex min-h-11 shrink-0 items-center justify-center rounded-full px-5 text-sm font-medium"
                >
                  Ouvrir ↗
                </a>
              ) : (
                <button
                  type="button"
                  onClick={copy}
                  className="key-primary inline-flex min-h-11 shrink-0 items-center justify-center rounded-full px-5 text-sm font-medium"
                >
                  {copied ? `${texts.copied} ✓` : texts.copy}
                </button>
              )}
            </div>
          </section>

          {/* Démo : question en clair → appel de la vraie API */}
          <section className="p-4 md:p-5">
            <h2 className="font-medium text-fg">{texts.tryTitle}</h2>
            <p className="mt-1 text-sm text-fg-muted">{texts.tryText}</p>

            <div className="mt-4 overflow-hidden rounded-xl border border-border bg-bg-base">
              <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
                <p className="text-sm font-medium text-fg">{toolName}</p>
                <span className="rounded-md bg-surface px-2 py-0.5 font-mono text-[11px] text-fg-muted">
                  {texts.tryWindowLabel}
                </span>
              </div>

              <div ref={logRef} aria-live="polite" className="relative flex h-80 flex-col gap-3 overflow-y-auto p-4">
                {messages.map((m, i) =>
                  m.kind === 'user' ? (
                    <p
                      key={i}
                      data-question
                      className="ml-auto max-w-[85%] rounded-2xl rounded-br-md bg-accent/20 px-4 py-2 text-sm text-fg ring-1 ring-inset ring-accent/30"
                    >
                      {m.text}
                    </p>
                  ) : (
                    <div key={i} className="flex flex-col items-start gap-2">
                      <span className="inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-2.5 py-1 font-mono text-[11px] text-fg-secondary">
                        <span
                          aria-hidden
                          className={`dot h-1.5 w-1.5 ${
                            m.status === undefined && !m.error
                              ? 'dot-accent animate-pulse'
                              : m.status && m.status < 300
                                ? 'dot-green'
                                : 'dot-amber'
                          }`}
                        />
                        remi · {endpoints[m.id].method} {endpoints[m.id].path}
                        {m.pick ? ` | .${m.pick}` : ''}
                        {m.status !== undefined && <span className="text-fg-muted">→ {m.status}</span>}
                      </span>
                      {m.body === undefined ? (
                        <p className="text-sm text-fg-muted">{texts.working}</p>
                      ) : (
                        <pre className="w-full whitespace-pre-wrap break-words rounded-lg border border-border bg-panel p-3 font-mono text-[12px] leading-relaxed text-fg-secondary">
                          {m.body}
                        </pre>
                      )}
                    </div>
                  ),
                )}
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  ask(input)
                }}
                className="flex items-center gap-2 border-t border-border p-2 pl-4"
              >
                <label htmlFor="api-question" className="sr-only">
                  {texts.inputLabel}
                </label>
                <input
                  id="api-question"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={placeholder}
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent text-sm text-fg outline-none placeholder:text-fg-muted"
                />
                <button
                  type="submit"
                  disabled={busy || !input.trim()}
                  aria-label="Envoyer"
                  className="key-primary flex h-9 w-9 shrink-0 items-center justify-center rounded-full disabled:opacity-40"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden>
                    <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </form>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {texts.suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => ask(s)}
                  disabled={busy}
                  className="key-chassis min-h-9 rounded-full px-3.5 text-[13px] disabled:opacity-40"
                >
                  {s}
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
