interface PillBadgeProps {
  children: React.ReactNode
  accent?: 'terracotta' | 'sage' | 'neutral'
  /** Pastille qui respire (statut en direct). */
  live?: boolean
}

const dot = {
  terracotta: 'dot-accent',
  sage: 'dot-green',
  neutral: 'dot-off',
}

// Étiquette pilule à filet, pastille de statut + texte.
export default function PillBadge({ children, accent = 'neutral', live = false }: PillBadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-border bg-white/[0.03] text-xs font-medium text-fg-secondary">
      <span aria-hidden className={`dot ${dot[accent]} h-1.5 w-1.5 ${live ? 'animate-pulse' : ''}`} />
      {children}
    </span>
  )
}
