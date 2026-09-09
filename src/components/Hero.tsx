import { hero } from '@/lib/content'
import Typewriter from '@/components/Typewriter'

export default function Hero() {
  return (
    <section id="accueil" className="max-w-[1120px] mx-auto px-5 md:px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-main leading-[1.1] tracking-tight">
            {hero.title}
          </h1>

          <Typewriter
            words={hero.keywords}
            className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-terracotta leading-tight"
          />
        </div>

        {/* Right column — hero card */}
        <div className="border border-terracotta/40 rounded-2xl p-6 bg-card-light card-hover">
          <p className="text-xs font-sans font-semibold uppercase tracking-widest text-muted mb-4">
            {hero.card.title}
          </p>

          <ul className="flex flex-col gap-3 mb-6">
            {hero.card.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 w-4 h-4 rounded-full border-2 border-sage flex items-center justify-center shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage" />
                </span>
                <span className="text-sm font-sans text-text-main">{item}</span>
              </li>
            ))}
          </ul>

          <div className="border-t border-border-dark/10 pt-4 grid grid-cols-3 gap-2 text-center">
            {hero.card.stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif font-bold text-2xl text-terracotta">{s.value}</div>
                <div className="text-[10px] font-sans text-muted leading-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
