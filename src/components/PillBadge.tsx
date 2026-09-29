interface PillBadgeProps {
  children: React.ReactNode
  accent?: 'terracotta' | 'sage' | 'neutral'
  /** LED qui respire (statut en direct). */
  live?: boolean
}

const led = {
  terracotta: 'led-red',
  sage: 'led-green',
  neutral: 'led-off',
}

// Étiquette creusée dans le châssis, LED de statut + texte tamponné.
export default function PillBadge({ children, accent = 'neutral', live = false }: PillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bg-base shadow-recessed-sm font-mono text-xs font-bold tracking-[0.08em] uppercase text-fg-muted">
      <span aria-hidden className={`led ${led[accent]} h-2 w-2 ${live ? 'animate-pulse' : ''}`} />
      {children}
    </span>
  )
}
