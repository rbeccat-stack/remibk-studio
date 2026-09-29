import Panel from '@/components/Panel'

interface ProcessCardProps {
  num: string
  title: string
  description: string
}

export default function ProcessCard({ num, title, description }: ProcessCardProps) {
  return (
    <Panel vents className="h-full p-5 sm:p-6">
      <span
        className="font-mono text-4xl sm:text-5xl font-bold leading-none tabular-nums text-accent-ink text-shadow-emboss select-none"
        aria-hidden
      >
        {num}
      </span>
      <div className="mt-4">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-fg-muted mb-1.5">Étape</p>
        <h3 className="font-bold text-xl tracking-tight text-fg">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-fg-muted leading-relaxed">{description}</p>
    </Panel>
  )
}
