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

      <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-start md:gap-12">
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-3 sm:gap-4">
          <a
            href={contact.ctaPrimary.href}
            className="inline-flex items-center px-6 py-3 rounded-full bg-terracotta text-white font-sans font-semibold text-sm hover:bg-terracotta-dark transition-colors"
          >
            {contact.ctaPrimary.label}
          </a>
          <a
            href={contact.ctaSecondary.href}
            className="inline-flex items-center px-6 py-3 rounded-full border border-border-dark/25 text-text-main font-sans font-semibold text-sm hover:bg-card-light transition-colors"
          >
            {contact.ctaSecondary.label}
          </a>
        </div>

        <dl className="border border-border-dark/12 rounded-2xl bg-card-light divide-y divide-border-dark/10 md:min-w-[280px]">
          {channels.map((c) => (
            <div key={c.label} className="flex items-baseline justify-between gap-6 px-5 py-3">
              <dt className="text-[11px] font-sans font-semibold uppercase tracking-widest text-muted">{c.label}</dt>
              <dd>
                <a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="text-sm font-sans font-medium text-text-main hover:text-terracotta transition-colors"
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
