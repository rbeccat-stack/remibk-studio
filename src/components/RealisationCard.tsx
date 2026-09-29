'use client'

import { useId, useState } from 'react'
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
}

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
}: RealisationCardProps) {
  const [open, setOpen] = useState(false)
  const detailId = useId()
  const isTerracotta = accent === 'terracotta'
  const ink = isTerracotta ? 'text-accent-ink' : 'text-slate'
  const led = isTerracotta ? 'led-red' : 'led-green'

  return (
    <Panel as="article" lift={false} elevated={open}>
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
              className={`inline-flex items-center gap-1.5 rounded-full bg-bg-base px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.08em] shadow-recessed-sm ${ink}`}
            >
              <span aria-hidden className={`led ${led} h-1.5 w-1.5`} />
              {type}
            </span>
            <span className="font-mono text-[11px] tracking-wide text-fg-muted">{context}</span>
            {tools && tools.length > 0 && (
              <span className="font-mono text-[11px] tracking-wide text-fg-muted">
                · {tools.join(', ')}
              </span>
            )}
          </div>

          <h3 className="mt-3 font-bold text-xl tracking-tight leading-snug text-fg sm:text-2xl">
            {title}
          </h3>

          <p className="mt-2 max-w-[60ch] text-sm leading-relaxed text-fg-muted">
            {summary}
          </p>
        </div>

        {/* Touche ronde : enfoncée quand la fiche est ouverte */}
        <span
          className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-bg-base text-base font-bold leading-none transition-[box-shadow,color] duration-150 ${
            open ? 'shadow-pressed-sm text-accent-ink' : 'shadow-key text-fg-muted group-hover:text-accent-ink'
          }`}
          aria-hidden
        >
          <span className={`transition-transform duration-300 ease-spring ${open ? 'rotate-45' : ''}`}>+</span>
        </span>
      </button>

      <div
        id={detailId}
        role="region"
        className="grid transition-[grid-template-rows] duration-300 ease-expo"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border shadow-[inset_0_1px_0_#fff] px-5 pb-5 pt-6 sm:px-7 sm:pb-7 md:px-8 md:pb-8">
            <p className="text-sm leading-relaxed text-fg">{problem}</p>

            <div className="mt-5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-fg-muted">
                Le résultat
              </span>
              <p className={`mt-1.5 text-sm font-bold leading-relaxed ${ink}`}>
                {result}
              </p>
            </div>

            <div className="mt-6">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-fg-muted">
                Comment
              </span>
              <ol className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
                {how.map((item, i) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className={`shrink-0 rounded-md bg-bg-base px-1.5 py-0.5 font-mono text-[10px] font-bold tabular-nums tracking-wider shadow-recessed-sm ${ink}`}
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
                className="key-primary mt-6 inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs hover:gap-2.5"
              >
                {link.label} <span aria-hidden>→</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Panel>
  )
}
