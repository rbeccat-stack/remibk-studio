import { about } from '@/lib/content'

export default function About() {
  return (
    <section id="apropos" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
      <div className="rounded-3xl border border-border-dark/12 bg-card-light p-6 sm:p-9 md:p-12">
        <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-center md:gap-12 lg:grid-cols-[320px_1fr] lg:gap-16">
          {/* Portrait — remplacer le monogramme par une photo :
              <img src="/photo-remi.jpg" alt="Rémi BECCAT" className="absolute inset-0 h-full w-full object-cover" />
              (déposer le fichier dans public/) */}
          <div className="portrait-frame relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden sm:max-w-[260px] md:max-w-[280px] rounded-2xl border border-border-dark/15 bg-bg-dark md:mx-0 lg:max-w-[320px]">
            <span
              aria-hidden
              className="absolute inset-0 grid place-items-center font-serif text-7xl font-bold tracking-tight text-text-main/20 lg:text-8xl"
            >
              {about.initials}
            </span>
            <span className="absolute bottom-3 left-3 rounded-full border border-border-dark/10 bg-bg-soft/85 px-3 py-1 font-sans text-[11px] font-semibold tracking-wide text-muted backdrop-blur-sm">
              {about.photoCaption}
            </span>
          </div>

          {/* Texte */}
          <div>
            <h2 className="flex flex-wrap items-baseline gap-3 font-serif text-3xl font-bold leading-tight text-text-main md:text-4xl">
              {about.title}
              <span aria-hidden className="text-2xl md:text-3xl">
                {about.emoji}
              </span>
            </h2>

            <div className="mt-5 flex flex-col gap-4">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="max-w-[62ch] font-sans text-sm leading-relaxed text-muted md:text-base"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
