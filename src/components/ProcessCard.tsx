import SpotlightCard from '@/components/SpotlightCard'

interface ProcessCardProps {
  num: string
  title: string
  description: string
}

export default function ProcessCard({ num, title, description }: ProcessCardProps) {
  return (
    <SpotlightCard className="h-full p-5 sm:p-6">
      <span
        className="font-mono text-4xl sm:text-5xl font-semibold leading-none tabular-nums text-gradient-accent select-none"
        aria-hidden
      >
        {num}
      </span>
      <div className="mt-4">
        <p className="font-mono text-[10px] uppercase tracking-widest text-fg-muted mb-1.5">Étape</p>
        <h3 className="font-semibold text-xl tracking-tight text-fg">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-fg-muted leading-relaxed">{description}</p>
    </SpotlightCard>
  )
}
