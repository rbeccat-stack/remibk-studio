'use client'

import { useId, useState } from 'react'
import SpotlightCard from '@/components/SpotlightCard'

interface RealisationCardProps {
  title: string
  type: string
  context: string
  summary: string
  problem: string
  result: string
  how: string[]
  accent: 'terracotta' | 'sage'
  link?: { label: string; href: string }
}

export default function RealisationCard({
  title,
  type,
  context,
  summary,
  problem,
  result,
  how,
  accent,
  link,
}: RealisationCardProps) {
  const [open, setOpen] = useState(false)
  const detailId = useId()
  const isTerracotta = accent === 'terracotta'
  const accentText = isTerracotta ? 'text-accent-2' : 'text-accent-3'
  const tagStyle = isTerracotta
    ? 'bg-accent/10 text-accent-2 border-accent/30'
    : 'bg-accent-3/10 text-accent-3 border-accent-3/30'
  const numStyle = isTerracotta
    ? 'border-accent/30 text-accent-2'
    : 'border-accent-3/30 text-accent-3'

  return (
    <SpotlightCard as="article" lift={false} className={open ? 'border-border-accent' : ''}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={detailId}
        className="flex w-full items-start justify-between gap-5 p-5 text-left sm:gap-6 sm:p-7 md:p-8 rounded-2xl"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${tagStyle}`}
            >
              {type}
            </span>
            <span className="font-mono text-[11px] tracking-wide text-fg-muted">{context}</span>
          </div>

          <h3 className="mt-3 font-semibold text-xl tracking-tight leading-snug text-fg sm:text-2xl">
            {title}
          </h3>

          <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-fg-muted">
            {summary}
          </p>
        </div>

        <span
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border text-base leading-none transition-[background-color,border-color,color,box-shadow] duration-300 ease-expo ${
            open
              ? 'border-accent bg-accent text-white shadow-cta'
              : 'border-white/10 bg-surface text-fg-muted shadow-inset-highlight group-hover:border-border-hover group-hover:text-fg'
          }`}
          aria-hidden
        >
          <span className={`transition-transform duration-300 ease-expo ${open ? 'rotate-45' : ''}`}>+</span>
        </span>
      </button>

      <div
        id={detailId}
        role="region"
        className="grid transition-[grid-template-rows] duration-300 ease-expo"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border px-5 pb-5 pt-6 sm:px-7 sm:pb-7 md:px-8 md:pb-8">
            <p className="text-sm leading-relaxed text-fg">{problem}</p>

            <div className="mt-5">
              <span className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
                Le résultat
              </span>
              <p className={`mt-1.5 text-sm font-semibold leading-relaxed ${accentText}`}>
                {result}
              </p>
            </div>

            <div className="mt-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">
                Comment
              </span>
              <ol className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
                {how.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`shrink-0 rounded-md border bg-surface px-1.5 py-0.5 font-mono text-[10px] tabular-nums tracking-wider ${numStyle}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-snug text-fg-subtle">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {link && (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold ${accentText} transition duration-200 ease-expo hover:gap-2.5`}
              >
                {link.label} <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  )
}
