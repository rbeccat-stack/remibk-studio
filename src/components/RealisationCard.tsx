'use client'

import { useId, useState } from 'react'

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
  const accentText = isTerracotta ? 'text-terracotta' : 'text-sage'
  const tagBg = isTerracotta ? 'bg-terracotta/10 text-terracotta' : 'bg-sage/10 text-sage'
  const numStyle = isTerracotta
    ? 'border-terracotta/30 text-terracotta'
    : 'border-sage/30 text-sage'
  const toggleRing = isTerracotta
    ? 'border-terracotta/30 text-terracotta group-hover:bg-terracotta/10'
    : 'border-sage/30 text-sage group-hover:bg-sage/10'

  return (
    <article className="rounded-2xl border border-border-dark/12 bg-card-light transition-colors hover:border-border-dark/25">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={detailId}
        className="group flex w-full items-start justify-between gap-5 p-5 text-left sm:gap-6 sm:p-7 md:p-8"
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider ${tagBg}`}
            >
              {type}
            </span>
            <span className="font-sans text-[11px] text-muted">{context}</span>
          </div>

          <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-text-main sm:text-2xl">
            {title}
          </h3>

          <p className="mt-2 max-w-[60ch] font-sans text-sm leading-relaxed text-muted">
            {summary}
          </p>
        </div>

        <span
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-sans text-base leading-none transition-[transform,background-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${toggleRing}`}
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden
        >
          +
        </span>
      </button>

      <div
        id={detailId}
        role="region"
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border-dark/10 px-5 pb-5 pt-6 sm:px-7 sm:pb-7 md:px-8 md:pb-8">
            <p className="font-sans text-sm leading-relaxed text-text-main">{problem}</p>

            <div className="mt-4">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-muted">
                Le résultat
              </span>
              <p className={`mt-1.5 font-sans text-sm font-semibold leading-relaxed ${accentText}`}>
                {result}
              </p>
            </div>

            <div className="mt-6">
              <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-muted">
                Comment
              </span>
              <ol className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
                {how.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`shrink-0 rounded-md border px-1.5 py-0.5 font-sans text-[10px] font-semibold tabular-nums tracking-wider ${numStyle}`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-sm leading-snug text-text-main">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            {link && (
              <a
                href={link.href}
                className={`mt-6 inline-flex items-center gap-1.5 font-sans text-sm font-semibold ${accentText} underline-offset-4 hover:underline`}
              >
                {link.label} <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
