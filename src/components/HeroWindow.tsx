'use client'

import { useEffect, useState, type ReactNode } from 'react'
import WordCycle from '@/components/WordCycle'

interface HeroWindowProps {
  lead: string
  keywords: string[]
}

const INTERVAL = 2400

// Pictos au trait (style Lucide), couleur héritée du parent.
function Icon({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  )
}

// Un picto et une couleur par mot-clé (même ordre que hero.keywords).
const KEYWORD_STYLE: Record<string, { color: string; icon: ReactNode }> = {
  Scraping: {
    color: 'text-accent-ink',
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </>
    ),
  },
  Data: {
    color: 'text-green',
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
      </>
    ),
  },
  Automatisation: {
    color: 'text-amber',
    icon: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  },
  IA: {
    color: 'text-accent-ink',
    icon: <path d="M12 3c.6 4.3 2.7 6.4 7 7-4.3.6-6.4 2.7-7 7-.6-4.3-2.7-6.4-7-7 4.3-.6 6.4-2.7 7-7z" />,
  },
}

// Statuts du tableau : la dernière ligne avance d'un cran à chaque mot-clé.
const STATUS = {
  scraped: { label: 'Scrapé', dot: 'dot-accent' },
  enriched: { label: 'Enrichi', dot: 'dot-amber' },
  qualified: { label: 'Qualifié', dot: 'dot-green' },
} as const
type Status = keyof typeof STATUS
const LIVE_ROW: Status[] = ['scraped', 'enriched', 'qualified', 'qualified']

// Ligne de squelette d'interface (texte factice, purement décoratif).
function Bar({ className = '' }: { className?: string }) {
  return <span className={`block h-[1.6cqw] min-h-1 rounded-full bg-white/[0.08] ${className}`} />
}

function StatusPill({ status }: { status: Status }) {
  const s = STATUS[status]
  return (
    <span className="inline-flex shrink-0 items-center gap-[1.4cqw] rounded-full border border-border bg-white/[0.03] px-[2.4cqw] py-[0.8cqw] text-[clamp(9px,2.8cqw,11px)] leading-none text-fg-secondary">
      <span className={`dot ${s.dot} h-[1.4cqw] min-h-1 w-[1.4cqw] min-w-1`} />
      {s.label}
    </span>
  )
}

// Fenêtre d'application sombre : fichier de leads, barre latérale des 4 volets (celui du mot-clé
// courant est actif), mot-clé qui défile et tableau de leads avec leurs statuts.
export default function HeroWindow({ lead, keywords }: HeroWindowProps) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (keywords.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % keywords.length), INTERVAL)
    return () => clearInterval(timer)
  }, [keywords.length])

  const rows: { w: [string, string]; status: Status }[] = [
    { w: ['w-[38%]', 'w-[22%]'], status: 'qualified' },
    { w: ['w-[30%]', 'w-[26%]'], status: 'qualified' },
    { w: ['w-[42%]', 'w-[18%]'], status: 'enriched' },
    { w: ['w-[34%]', 'w-[24%]'], status: LIVE_ROW[index % LIVE_ROW.length] },
  ]

  return (
    <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] md:ml-auto md:mr-0">
      {/* Halo indigo derrière la fenêtre */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-y-10 inset-x-0 bg-[radial-gradient(ellipse_at_center,rgba(94,106,210,0.22),transparent_65%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-panel shadow-floating">
        {/* Barre de titre */}
        <div aria-hidden className="relative flex h-9 items-center gap-1.5 border-b border-border px-3.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          ))}
          <span className="absolute inset-x-0 text-center font-mono text-[11px] text-fg-muted">leads_qualifies.csv</span>
        </div>

        <div className="flex">
          {/* Barre latérale : les 4 volets, celui du mot-clé courant en surbrillance */}
          <div aria-hidden className="hidden w-[30%] shrink-0 flex-col gap-1 border-r border-border p-2.5 sm:flex">
            <span className="px-2 pb-1.5 pt-1 font-mono text-[10px] text-fg-subtle">pipeline</span>
            {keywords.map((k, i) => {
              const style = KEYWORD_STYLE[k]
              const active = i === index
              return (
                <span
                  key={k}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] transition-colors duration-500 ease-quart ${
                    active ? 'bg-white/[0.06] text-fg' : 'text-fg-muted'
                  }`}
                >
                  <Icon
                    className={`h-3.5 w-3.5 shrink-0 transition-colors duration-500 ease-quart ${
                      active ? style?.color ?? 'text-fg' : 'text-fg-subtle'
                    }`}
                  >
                    {style?.icon}
                  </Icon>
                  <span className="truncate">{k}</span>
                </span>
              )
            })}
          </div>

          {/* Zone principale */}
          <div className="@container relative flex-1">
            <div className="flex aspect-[4/3] flex-col justify-center px-[7cqw]">
              <p className="font-mono text-[clamp(10px,3.4cqw,13px)] text-fg-muted">{lead}</p>
              <WordCycle
                words={keywords}
                index={index}
                className="mt-[2cqw] max-w-full font-medium leading-[1.05] tracking-[-0.03em] text-fg text-[11cqw]"
              />

              {/* Mini tableau de leads */}
              <div aria-hidden className="mt-[6cqw]">
                <div className="flex items-center justify-between border-b border-border pb-[2cqw] font-mono text-[clamp(8px,2.6cqw,10px)] text-fg-subtle">
                  <span>entreprise · décideur</span>
                  <span>statut</span>
                </div>
                <div className="flex flex-col">
                  {rows.map((row, i) => (
                    <span key={i} className="flex items-center justify-between gap-[3cqw] py-[1.8cqw]">
                      <span className="flex flex-1 items-center gap-[2.5cqw]">
                        <Bar className={row.w[0]} />
                        <Bar className={`${row.w[1]} bg-white/[0.05]`} />
                      </span>
                      <StatusPill status={row.status} />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
