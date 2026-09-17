interface PillBadgeProps {
  children: React.ReactNode
  accent?: 'terracotta' | 'sage' | 'neutral'
}

export default function PillBadge({ children, accent = 'neutral' }: PillBadgeProps) {
  const colors = {
    terracotta: 'bg-accent/10 text-accent-2 border-accent/30',
    sage: 'bg-accent-2/10 text-accent-2 border-accent-2/30',
    neutral: 'bg-surface text-fg-muted border-border',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border font-mono text-xs tracking-widest uppercase shadow-inset-highlight ${colors[accent]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 shadow-[0_0_8px_currentColor]" />
      {children}
    </span>
  )
}
