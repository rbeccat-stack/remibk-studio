'use client'

import { useEffect, useId, useRef, useState, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'
import Panel from '@/components/Panel'

interface RealisationCardProps {
  title: string
  type: string
  context: string
  tools?: string[]
  summary: string
  problem: string
  result: string
  how: string[]
  accent: 'terracotta' | 'sage'
  link?: { label: string; href: string }
  /** Ancre de la carte (#…) : un lien vers elle déplie aussi le détail. */
  anchor?: string
}

// Sous md, le détail s'ouvre en plein écran au lieu de rallonger la page.
const MOBILE_QUERY = '(max-width: 767px)'
const subscribeMobile = (cb: () => void) => {
  const mq = window.matchMedia(MOBILE_QUERY)
  mq.addEventListener('change', cb)
  return () => mq.removeEventListener('change', cb)
}
const useIsMobile = () =>
  useSyncExternalStore(subscribeMobile, () => window.matchMedia(MOBILE_QUERY).matches, () => false)

export default function RealisationCard({
  title,
  type,
  context,
  tools,
  summary,
  problem,
  result,
  how,
  accent,
  link,
  anchor,
}: RealisationCardProps) {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()
  const detailId = useId()
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)
  const isTerracotta = accent === 'terracotta'
  const ink = isTerracotta ? 'text-accent-ink' : 'text-fg-secondary'
  const dot = isTerracotta ? 'dot-accent' : 'dot-green'
  const inlineOpen = open && !isMobile
  const sheetOpen = open && isMobile

  // Arrivée par l'ancre (URL au chargement, changement de hash, ou clic sur un lien vers elle,
  // y compris quand le hash est déjà le bon) : on déplie la carte.
  useEffect(() => {
    if (!anchor) return
    const hash = `#${anchor}`
    const openIfTargeted = () => {
      if (window.location.hash === hash) setOpen(true)
    }
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element | null)?.closest?.(`a[href="${hash}"]`)) setOpen(true)
    }
    openIfTargeted()
    window.addEventListener('hashchange', openIfTargeted)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('hashchange', openIfTargeted)
      document.removeEventListener('click', onClick)
    }
  }, [anchor])

  // Plein écran mobile : page figée derrière, Échap pour fermer, focus sur la croix.
  useEffect(() => {
    if (!sheetOpen) return
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = overflow
      window.removeEventListener('keydown', onKey)
    }
  }, [sheetOpen])

  const meta = (
    <div className="flex flex-wrap items-center gap-2">
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] ${ink}`}
      >
        <span aria-hidden className={`dot ${dot} h-1.5 w-1.5`} />
        {type}
      </span>
      <span className="font-mono text-[11px] text-fg-muted">{context}</span>
      {tools && tools.length > 0 && (
        <span className="font-mono text-[11px] text-fg-muted">
          · {tools.join(', ')}
        </span>
      )}
    </div>
  )

  const detail = (
    <>
      <p className="text-sm leading-relaxed text-fg-secondary">{problem}</p>

      <div className="mt-5">
        <span className="font-mono text-xs text-fg-muted">
          Le résultat
        </span>
        <p className={`mt-1.5 text-sm font-medium leading-relaxed ${ink}`}>
          {result}
        </p>
      </div>

      <div className="mt-6">
        <span className="font-mono text-xs text-fg-muted">
          Comment
        </span>
        <ol className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {how.map((item, i) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className={`shrink-0 rounded-md border border-border px-1.5 py-0.5 font-mono text-[11px] tabular-nums ${ink}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-sm leading-snug text-fg-muted">{item}</span>
            </li>
          ))}
        </ol>
      </div>

      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="key-primary mt-6 inline-flex h-9 items-center gap-1.5 rounded-full px-4 text-[13px] hover:gap-2.5"
        >
          {link.label} <span aria-hidden>→</span>
        </a>
      )}
    </>
  )

  return (
    <div>
      <Panel as="article" lift={false} elevated={inlineOpen}>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={isMobile ? undefined : detailId}
          aria-haspopup={isMobile ? 'dialog' : undefined}
          className="flex w-full items-start justify-between gap-5 p-5 text-left sm:gap-6 sm:p-7 md:p-8 rounded-2xl transition-colors duration-200 hover:bg-white/[0.015]"
        >
          <div>
            {meta}

            <h3 className="mt-3 font-medium text-xl tracking-[-0.018em] leading-snug text-fg sm:text-2xl">
              {title}
            </h3>

            <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-fg-muted">
              {summary}
            </p>
          </div>

          {/* Bouton rond : surface active quand la fiche est ouverte */}
          <span
            className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-base leading-none transition-colors duration-150 ${
              inlineOpen ? 'border-border-strong bg-surface text-accent-ink' : 'border-border text-fg-muted group-hover:border-border-strong group-hover:text-fg'
            }`}
            aria-hidden
          >
            <span className={`transition-transform duration-300 ease-quart ${inlineOpen ? 'rotate-45' : ''}`}>+</span>
          </span>
        </button>

        <div
          id={detailId}
          role="region"
          inert={!inlineOpen}
          className="grid transition-[grid-template-rows] duration-300 ease-expo"
          style={{ gridTemplateRows: inlineOpen ? '1fr' : '0fr' }}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border px-5 pb-5 pt-6 sm:px-7 sm:pb-7 md:px-8 md:pb-8">{detail}</div>
          </div>
        </div>
      </Panel>

      {/* Fiche plein écran (mobile) */}
      {sheetOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="animate-fade-up fixed inset-0 z-[100] flex flex-col bg-bg-base"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border px-5 pb-4 pt-5">
              <div>
                {meta}
                <h3 id={titleId} className="mt-3 font-medium text-xl tracking-[-0.018em] leading-snug text-fg">
                  {title}
                </h3>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border-strong bg-surface text-lg leading-none text-fg"
              >
                ×
              </button>
            </div>
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 pb-10 pt-6">{detail}</div>
          </div>,
          document.body,
        )}
    </div>
  )
}
