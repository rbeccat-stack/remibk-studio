import { hero } from '@/lib/content'
import Typewriter from '@/components/Typewriter'
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

          <div className="mt-5 flex flex-col gap-0.5">
            <p className="text-muted text-base md:text-lg leading-snug">{hero.leadStart}</p>
            <Typewriter
              words={hero.keywords}
              className="block font-serif font-bold text-2xl sm:text-3xl md:text-4xl text-terracotta leading-[1.2]"
            />
            <p className="text-muted text-base md:text-lg leading-snug">{hero.leadEnd}</p>
          </div>

          <div className="mt-8">
            <PillBadge>{hero.meta}</PillBadge>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-5">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center px-6 py-3 rounded-full bg-terracotta text-white font-sans font-semibold text-sm hover:bg-terracotta-dark transition-colors"
            >
              {hero.ctaPrimary.label}
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="group inline-flex items-center gap-1.5 font-sans font-semibold text-sm text-text-main hover:text-terracotta transition-colors"
            >
              {hero.ctaSecondary.label}
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Right column — growth hacking illustration */}
        <GrowthIllustration />
      </div>
    </section>
  )
}
