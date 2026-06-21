interface ProcessCardProps {
  num: string
  title: string
  description: string
}

export default function ProcessCard({ num, title, description }: ProcessCardProps) {
  return (
    <div className="card-hover border border-border-dark/12 rounded-2xl p-4 sm:p-6 bg-card flex flex-col gap-3">
      <span
        className="font-serif font-bold text-4xl sm:text-5xl leading-none select-none"
        style={{
          WebkitTextStroke: '2px #C75B2A',
          color: 'transparent',
        }}
        aria-hidden
      >
        {num}
      </span>
      <div>
        <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-muted mb-1">Étape</p>
        <h3 className="font-serif font-bold text-xl text-text-main">{title}</h3>
      </div>
      <p className="text-sm font-sans text-muted leading-relaxed">{description}</p>
    </div>
  )
}
