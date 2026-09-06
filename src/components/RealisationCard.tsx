interface RealisationCardProps {
  title: string
  type: string
  context: string
  problem: string
  result: string
  how: string[]
  accent: 'terracotta' | 'sage'
  link?: { label: string; href: string }
}

export default function RealisationCard({
  title,
  type,
  context,
  problem,
  result,
  how,
  accent,
  link,
}: RealisationCardProps) {
  const borderColor = accent === 'terracotta' ? 'border-terracotta/40' : 'border-sage/40'
  const accentText = accent === 'terracotta' ? 'text-terracotta' : 'text-sage'
  const dotColor = accent === 'terracotta' ? 'bg-terracotta' : 'bg-sage'
  const tagBg = accent === 'terracotta' ? 'bg-terracotta/10 text-terracotta' : 'bg-sage/10 text-sage'

  return (
    <div
      className={`card-hover border ${borderColor} rounded-2xl p-5 sm:p-6 bg-card-light flex flex-col gap-4 h-full`}
    >
      {/* Meta */}
      <div className="flex items-center gap-2 flex-wrap">
        <span
          className={`text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${tagBg}`}
        >
          {type}
        </span>
        <span className="text-[11px] font-sans text-muted">{context}</span>
      </div>

      <h3 className={`font-serif font-bold text-base sm:text-lg ${accentText} leading-snug`}>
        {title}
      </h3>

      {/* Lecture rapide */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-muted">
            Le problème
          </span>
          <p className="text-sm font-sans text-text-main leading-relaxed">{problem}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-muted">
            Le résultat
          </span>
          <p className={`text-sm font-sans font-semibold ${accentText} leading-relaxed`}>{result}</p>
        </div>
      </div>

      {/* Niveau technique */}
      <div className="border-t border-border-dark/10 pt-3 mt-auto">
        <span className="text-[10px] font-sans font-semibold uppercase tracking-wider text-muted">
          Comment
        </span>
        <ul className="flex flex-col gap-2 mt-2">
          {how.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
              <span className="text-sm font-sans text-text-main leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {link && (
        <a
          href={link.href}
          className={`text-sm font-sans font-semibold ${accentText} hover:underline underline-offset-4 self-start`}
        >
          {link.label} →
        </a>
      )}
    </div>
  )
}
