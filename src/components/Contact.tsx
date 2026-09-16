import SectionTitle from '@/components/SectionTitle'
import { contact } from '@/lib/content'

const channels = [
  { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { label: 'LinkedIn', value: contact.linkedinLabel, href: contact.linkedin, external: true },
  { label: 'Téléphone', value: contact.phone, href: contact.phoneHref },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
      <SectionTitle
        title={contact.title}
        underlineWord="30 minutes"
        subtitle={contact.subtitle}
        accent="terracotta"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-[1.25fr_1fr] md:gap-6">
        {/* Disponibilité + actions */}
        <div className="border border-border-dark/12 rounded-2xl bg-card-light p-6 sm:p-8 flex flex-col gap-5">
          <h3 className="font-serif font-bold text-2xl md:text-3xl text-text-main leading-tight">
            {contact.availability.lead}{' '}
            <span className="underline decoration-terracotta underline-offset-4 decoration-2">
              {contact.availability.highlight}
            </span>
          </h3>
          <p className="text-sm md:text-base font-sans text-muted leading-relaxed max-w-[52ch]">
            {contact.availability.text}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1">
            <a
              href={contact.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center px-6 py-3 rounded-full bg-terracotta text-white font-sans font-semibold text-sm hover:bg-terracotta-dark transition-colors"
            >
              {contact.ctaPrimary.label}
            </a>
            <a
              href={contact.ctaSecondary.href}
              className="inline-flex justify-center items-center px-6 py-3 rounded-full border border-border-dark/25 text-text-main font-sans font-semibold text-sm hover:bg-bg transition-colors"
            >
              {contact.ctaSecondary.label}
            </a>
          </div>
        </div>

        {/* Canaux directs */}
        <dl className="flex flex-col gap-3">
          {channels.map((c) => (
            <div
              key={c.label}
              className="border border-border-dark/12 rounded-2xl bg-card-light px-5 py-4 flex items-baseline justify-between gap-6"
            >
              <dt className="text-[11px] font-sans font-semibold uppercase tracking-widest text-muted">{c.label}</dt>
              <dd className="min-w-0">
                <a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="text-sm font-sans font-medium text-text-main hover:text-terracotta transition-colors break-all"
                >
                  {c.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
