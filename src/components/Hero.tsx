import { hero } from '@/lib/content'
import WordCycle from '@/components/WordCycle'
import GrowthIllustration from '@/components/GrowthIllustration'
import PillBadge from '@/components/PillBadge'

export default function Hero() {
  return (
    <section id="accueil" className="max-w-[1120px] mx-auto px-5 md:px-6 pt-14 pb-20 md:pt-20 md:pb-28">
      <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start md:items-center">
        {/* Left column */}
        <div className="flex flex-col items-start">
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-text-main leading-[1.05] tracking-tight text-balance">
            {hero.title}
          </h1>

          <p className="mt-5 font-sans text-xl md:text-2xl text-text-main leading-snug">
            {hero.lead}
          </p>
          <WordCycle
            words={hero.keywords}
            suffix="."
            className="mt-1 max-w-full font-serif font-black text-[clamp(2rem,9vw,3.5rem)] text-terracotta leading-[1.05] tracking-tight"
          />

          <div className="mt-8">
            <PillBadge accent="sage">{hero.meta}</PillBadge>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-5">
            <a
              href={hero.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-terracotta text-white font-sans font-semibold text-sm hover:bg-terracotta-dark transition-colors"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center px-6 py-3 rounded-full border border-border-dark/25 text-text-main font-sans font-semibold text-sm hover:bg-card-light transition-colors"
            >
              {hero.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Right column — growth hacking illustration */}
        <GrowthIllustration />
      </div>
    </section>
  )
}
