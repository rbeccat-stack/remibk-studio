import { about } from '@/lib/content'
import SpotlightCard from '@/components/SpotlightCard'
import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <section id="apropos" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
      <Reveal>
        <SpotlightCard lift={false} className="p-6 sm:p-9 md:p-12">
          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center md:gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
            {/* Portrait — remplacer le monogramme par une photo :
                <img src="/photo-remi.jpg" alt="Rémi BECCAT" className="absolute inset-0 h-full w-full object-cover" />
                (déposer le fichier dans public/) */}
            <div className="portrait-frame relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden sm:max-w-[260px] md:max-w-[280px] rounded-2xl border border-white/10 bg-bg-elevated shadow-inset-highlight md:mx-0 lg:max-w-[320px]">
              <span
                aria-hidden
                className="absolute inset-0 grid place-items-center text-gradient-accent font-semibold text-7xl tracking-tight lg:text-8xl"
              >
                {about.initials}
              </span>
            </div>

            {/* Texte */}
            <div>
              <h2 className="flex flex-wrap items-baseline gap-3 text-gradient-fg font-semibold text-3xl tracking-tight leading-tight md:text-4xl">
                {about.title}
                <span aria-hidden className="text-2xl md:text-3xl text-fg">
                  {about.emoji}
                </span>
              </h2>

              <div className="mt-5 flex flex-col gap-4">
                {about.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="max-w-[62ch] text-sm leading-relaxed text-fg-muted md:text-base"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </SpotlightCard>
      </Reveal>
    </section>
  )
}
