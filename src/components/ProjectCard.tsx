interface ProjectCardProps {
  icon: string
  title: string
  badge?: string
  description: string
  points: string[]
  accent: 'terracotta' | 'sage'
  link?: { label: string; href: string }
}

export default function ProjectCard({ icon, title, badge, description, points, accent, link }: ProjectCardProps) {
  const borderColor = accent === 'terracotta' ? 'border-terracotta/40' : 'border-sage/40'
  const accentText = accent === 'terracotta' ? 'text-terracotta' : 'text-sage'
  const dotColor = accent === 'terracotta' ? 'bg-terracotta' : 'bg-sage'
  const badgeBg = accent === 'terracotta' ? 'bg-terracotta/10 text-terracotta' : 'bg-sage/10 text-sage'

  return (
    <div className={`card-hover border ${borderColor} rounded-2xl p-5 sm:p-6 bg-card-light flex flex-col gap-4 h-full`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl shrink-0">{icon}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-2 flex-wrap mb-1">
            <h3 className={`font-serif font-bold text-base sm:text-lg ${accentText} leading-snug`}>{title}</h3>
            {badge && (
              <span className={`shrink-0 text-[10px] font-sans font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${badgeBg}`}>
                {badge}
              </span>
            )}
          </div>
          <p className="text-sm font-sans text-muted leading-relaxed">{description}</p>
        </div>
      </div>

      <ul className="flex flex-col gap-2 mt-auto">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
            <span className="text-sm font-sans text-text-main leading-snug">{p}</span>
          </li>
        ))}
      </ul>

      {link && (
        <a
          href={link.href}
          className={`text-sm font-sans font-semibold ${accentText} hover:underline underline-offset-4 mt-1 self-start`}
        >
          {link.label}
        </a>
      )}
    </div>
  )
}
