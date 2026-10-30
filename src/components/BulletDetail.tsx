'use client'

import { useEffect, useId, useRef, useState } from 'react'

export interface DetailedBullet {
  text: string
  details: string[]
  file?: { label: string; href: string }
}

// Puce dont le détail s'ouvre au survol (souris), au focus clavier ou au toucher.
export default function BulletDetail({ text, details, file }: DetailedBullet) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const id = useId()

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
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className="cursor-help text-left text-sm text-fg-muted leading-relaxed underline decoration-dotted decoration-fg-subtle underline-offset-4 transition-colors hover:decoration-accent-ink"
      >
        {text}
      </button>
      {open && (
        <div className="absolute top-full right-0 z-50 w-[min(22rem,calc(100vw-2.5rem))] pt-3">
          <div id={id} role="region" aria-label="Détail" className="rounded-xl border border-border-strong bg-surface p-4 shadow-floating">
            <ul className="flex flex-col gap-2">
              {details.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-fg-muted leading-relaxed">
                  <span aria-hidden className="text-accent-ink">→</span>
                  {d}
                </li>
              ))}
            </ul>
            {file && (
              <a
                href={file.href}
                download
                className="key-chassis mt-4 inline-flex rounded-full px-3.5 py-1.5 font-mono text-xs"
              >
                ↓ {file.label}
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
