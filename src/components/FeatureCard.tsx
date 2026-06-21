interface FeatureCardProps {
  icon: string
  title: string
  bullets: string[]
  accent: 'terracotta' | 'sage' | 'purple'
}

export default function FeatureCard({ icon, title, bullets, accent }: FeatureCardProps) {
  const borderColor = {
    terracotta: 'border-terracotta/50',
    sage: 'border-sage/50',
    purple: 'border-purple-soft/50',
  }[accent]

  const titleColor = {
    terracotta: 'text-terracotta-dark',
    sage: 'text-sage-dark',
    purple: 'text-purple-soft',
  }[accent]

  const dotColor = {
    terracotta: 'bg-terracotta',
    sage: 'bg-sage',
    purple: 'bg-purple-soft',
  }[accent]

  return (
    <div className={`card-hover border ${borderColor} rounded-2xl p-6 bg-card-light flex flex-col gap-4`}>
      <div className="text-2xl">{icon}</div>
      <h3 className={`font-serif font-bold text-xl ${titleColor}`}>{title}</h3>
      <ul className="flex flex-col gap-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
            <span className="text-sm font-sans text-text-main leading-snug">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
