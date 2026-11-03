import Image from 'next/image'
import { about } from '@/lib/content'
import Panel from '@/components/Panel'
import Reveal from '@/components/Reveal'

export default function About() {
  return (
    <section id="apropos" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
      <Reveal>
        <Panel lift={false} className="p-6 sm:p-9 md:p-12">
          <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center md:gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
            {/* Portrait : photo recadrée tête et buste (public/photo-remi.jpg, 640×800). */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden sm:max-w-[260px] md:max-w-[280px] rounded-2xl border border-border bg-surface md:mx-0 lg:max-w-[320px]">
              <Image
                src="/photo-remi.jpg"
                alt="Rémi BECCAT"
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 768px) 280px, 260px"
                className="object-cover"
              />
            </div>

            {/* Texte */}
            <div>
              <h2 className="flex flex-wrap items-baseline gap-3 text-fg font-medium text-3xl tracking-[-0.022em] leading-[1.1] md:text-4xl">
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
        </Panel>
      </Reveal>
    </section>
  )
}
