import { hero } from '@/lib/content'
import WordCycle from '@/components/WordCycle'
import GrowthIllustration from '@/components/GrowthIllustration'
import PillBadge from '@/components/PillBadge'
import HeroParallax from '@/components/HeroParallax'

export default function Hero() {
  return (
    <section id="accueil" className="max-w-[1120px] mx-auto px-5 md:px-6 pt-16 pb-20 md:pt-24 md:pb-32">
      <HeroParallax>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start md:items-center">
          {/* Left column */}
          <div className="flex flex-col items-start">
            <h1 className="animate-fade-up text-fg text-shadow-emboss font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.03em] text-balance">
              {hero.title}
            </h1>

            <p className="animate-fade-up [animation-delay:80ms] mt-6 text-lg md:text-xl text-fg-muted leading-relaxed">
              {hero.lead}
            </p>
            <WordCycle
              words={hero.keywords}
              className="animate-fade-up [animation-delay:160ms] text-accent-ink text-shadow-emboss mt-1 max-w-full font-extrabold text-[clamp(2rem,8vw,3.5rem)] leading-[1.05] tracking-tight"
            />

            <div className="animate-fade-up [animation-delay:240ms] mt-8">
              <PillBadge accent="sage" live>{hero.meta}</PillBadge>
            </div>

            <div className="animate-fade-up [animation-delay:320ms] mt-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
              <a
                href={hero.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="key-primary inline-flex min-h-12 items-center px-4 py-3 rounded-xl text-xs"
              >
                {hero.ctaPrimary.label}
              </a>
              <a
                href={hero.ctaSecondary.href}
                className="key-chassis inline-flex min-h-12 items-center px-4 py-3 rounded-xl text-xs"
              >
                {hero.ctaSecondary.label}
              </a>
            </div>
          </div>

          {/* Right column — growth hacking illustration */}
          <div className="animate-fade-up [animation-delay:200ms]">
            <GrowthIllustration />
          </div>
        </div>
      </HeroParallax>
    </section>
  )
}
