import SpotlightCard from '@/components/SpotlightCard'

interface FeatureCardProps {
  icon: string
  title: string
  bullets: string[]
  accent: 'terracotta' | 'sage' | 'purple'
}

export default function FeatureCard({ icon, title, bullets, accent }: FeatureCardProps) {
  const dotColor = {
    terracotta: 'bg-accent',
    sage: 'bg-accent-2',
    purple: 'bg-accent-3',
  }[accent]

  return (
    <SpotlightCard className="h-full p-6 md:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.1] to-white/[0.02] text-2xl shadow-inset-highlight">
        {icon}
      </div>
      <h3 className="mt-5 font-semibold text-xl tracking-tight text-fg">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span className={`mt-[7px] w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
            <span className="text-sm text-fg-muted leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
    </SpotlightCard>
  )
}
