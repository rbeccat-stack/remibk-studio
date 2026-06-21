interface PillBadgeProps {
  children: React.ReactNode
  accent?: 'terracotta' | 'sage' | 'neutral'
}

export default function PillBadge({ children, accent = 'neutral' }: PillBadgeProps) {
  const colors = {
    terracotta: 'bg-terracotta/10 text-terracotta border-terracotta/20',
    sage: 'bg-sage/10 text-sage border-sage/20',
    neutral: 'bg-card-light text-muted border-border-dark/10',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-sans font-semibold tracking-wide ${colors[accent]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {children}
    </span>
  )
}
