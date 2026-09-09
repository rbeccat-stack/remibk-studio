import { hero } from '@/lib/content'
import Typewriter from '@/components/Typewriter'
import GrowthIllustration from '@/components/GrowthIllustration'

export default function Hero() {
  return (
    <section id="accueil" className="max-w-[1120px] mx-auto px-5 md:px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-main leading-[1.1] tracking-tight">
            {hero.title}
          </h1>

          <div className="flex flex-col gap-1">
            <p className="text-muted text-base md:text-lg">{hero.leadStart}</p>
            <Typewriter
              words={hero.keywords}
              className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-terracotta leading-tight"
            />
            <p className="text-muted text-base md:text-lg">{hero.leadEnd}</p>
          </div>

          <p className="text-sm font-sans text-muted">{hero.meta}</p>

          <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-5 pt-1">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center px-6 py-3 rounded-full bg-terracotta text-white font-sans font-semibold text-sm hover:bg-terracotta-dark transition-colors"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-text-main hover:text-terracotta transition-colors"
            >
              {hero.ctaSecondary.label} <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* Right column — growth hacking illustration */}
        <GrowthIllustration />
      </div>
    </section>
  )
}
