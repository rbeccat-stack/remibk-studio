import { about } from '@/lib/content'

export default function About() {
  const accentBorder = {
    terracotta: 'border-terracotta/40',
    sage: 'border-sage/40',
    purple: 'border-purple-soft/40',
  }
  const accentText = {
    terracotta: 'text-terracotta',
    sage: 'text-sage',
    purple: 'text-purple-soft',
  }

  return (
    <section id="apropos" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-sage shrink-0" />
        <h2 className="font-serif font-bold text-3xl md:text-4xl text-text-main">{about.title}</h2>
      </div>
      <p className="text-muted text-base md:text-lg leading-relaxed max-w-2xl mb-8">{about.subtitle}</p>

      {/* Main card */}
      <div className="border border-border-dark/15 rounded-2xl p-7 md:p-10 bg-card-light mb-8">
        <div className="flex flex-col gap-4 mb-8">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-sm md:text-base font-sans text-text-main leading-relaxed">{p}</p>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <a
            href={about.ctaPrimary.href}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-terracotta text-white font-sans font-semibold text-sm hover:bg-terracotta-dark transition-colors"
          >
            {about.ctaPrimary.label}
          </a>
          <a
            href={about.ctaSecondary.href}
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-border-dark/25 text-text-main font-sans font-semibold text-sm hover:bg-card transition-colors"
          >
            {about.ctaSecondary.label}
          </a>
          <a
            href={about.ctaTertiary.href}
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-sage/40 text-sage font-sans font-semibold text-sm hover:bg-card transition-colors"
          >
            {about.ctaTertiary.label}
          </a>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {about.stats.map((s) => (
          <div
            key={s.label}
            className={`card-hover border ${accentBorder[s.accent]} rounded-xl p-5 bg-card-light text-center`}
          >
            <div
              className={`font-serif font-bold text-4xl mb-1 ${accentText[s.accent]}`}
              style={{ WebkitTextStroke: '1.5px currentColor', color: 'transparent' }}
            >
              {s.value}
            </div>
            <div className="text-xs font-sans text-muted leading-snug">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
