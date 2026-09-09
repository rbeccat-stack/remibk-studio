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
  const isTerracotta = accent === 'terracotta'
  const accentText = isTerracotta ? 'text-terracotta' : 'text-sage'
  const tagBg = isTerracotta ? 'bg-terracotta/10 text-terracotta' : 'bg-sage/10 text-sage'
  const panel = isTerracotta
    ? 'border-terracotta/20 bg-terracotta/5'
    : 'border-sage/20 bg-sage/5'
  const numStyle = isTerracotta
    ? 'border-terracotta/30 text-terracotta'
    : 'border-sage/30 text-sage'

  return (
    <article className="rounded-2xl border border-border-dark/12 bg-card-light p-5 transition-colors hover:border-border-dark/25 sm:p-7 md:p-8">
      {/* Ligne 1 — identité à gauche, résultat en encart à droite */}
      <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:gap-10">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-0.5 font-sans text-[10px] font-semibold uppercase tracking-wider ${tagBg}`}
            >
              {type}
            </span>
            <span className="font-sans text-[11px] text-muted">{context}</span>
          </div>

          <h3 className="mt-3 font-serif text-xl font-bold leading-snug text-text-main sm:text-2xl">
            {title}
          </h3>

          <p className="mt-3 font-sans text-sm leading-relaxed text-muted">{problem}</p>
        </div>

        <div className={`self-start rounded-xl border ${panel} p-4 sm:p-5`}>
          <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-muted">
            Le résultat
          </span>
          <p className={`mt-1.5 font-sans text-sm font-semibold leading-relaxed ${accentText}`}>
            {result}
          </p>
        </div>
      </div>

      {/* Ligne 2 — le « comment » déroulé horizontalement */}
      <div className="mt-7 border-t border-border-dark/10 pt-6">
        <span className="font-sans text-[10px] font-semibold uppercase tracking-wider text-muted">
          Comment
        </span>
        <ol className="mt-4 grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {how.map((item, i) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className={`shrink-0 rounded-md border px-1.5 py-0.5 font-sans text-[10px] font-semibold tabular-nums tracking-wider ${numStyle}`}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-sans text-sm leading-snug text-text-main">{item}</span>
            </li>
          ))}
        </ol>
      </div>

      {link && (
        <a
          href={link.href}
          className={`mt-6 inline-flex items-center gap-1.5 font-sans text-sm font-semibold ${accentText} underline-offset-4 hover:underline`}
        >
          {link.label} <span aria-hidden>→</span>
        </a>
      )}
    </article>
  )
}
