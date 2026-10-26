'use client'

import { useEffect, useRef, useState } from 'react'

interface PromptPreviewProps {
  label: string
  text: string
}

// Lien « Voir le prompt » : le texte s'ouvre au survol (souris), au focus clavier ou au toucher.
export default function PromptPreview({ label, text }: PromptPreviewProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onDown)
    }
  }, [open])

  return (
    <div
      ref={ref}
      className="relative mt-5"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="prompt-hermes"
        onClick={() => setOpen((v) => !v)}
        className="font-mono text-xs font-bold uppercase tracking-[0.08em] text-accent-ink underline underline-offset-4 decoration-accent-ink/40 transition-colors hover:decoration-accent-ink"
      >
        {label} {open ? '↑' : '↗'}
      </button>
      {open && (
        <div className="absolute bottom-full right-0 z-50 w-[min(34rem,calc(100vw-2.5rem))] pb-3">
          <div
            id="prompt-hermes"
            role="region"
            aria-label={label}
            tabIndex={0}
            className="max-h-[55vh] overflow-y-auto rounded-xl bg-bg-base p-4 shadow-floating"
          >
            <pre className="whitespace-pre-wrap break-words font-mono text-[11px] leading-relaxed text-fg-muted">
              {text}
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
