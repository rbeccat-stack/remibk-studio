import SectionTitle from '@/components/SectionTitle'
import SpotlightCard from '@/components/SpotlightCard'
import Reveal from '@/components/Reveal'
import { contact, footer } from '@/lib/content'

const channels = [
  { icon: '✉', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: 'in', label: 'LinkedIn', value: contact.linkedinLabel, href: footer.linkedin, external: true },
  { icon: '📞', label: 'Téléphone', value: contact.phone, href: contact.phoneHref },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
      <Reveal>
        <SectionTitle
          title={contact.title}
          underlineWord="30 minutes"
          subtitle={contact.subtitle}
          accent="terracotta"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-[1.25fr_1fr] md:gap-6">
        {/* Disponibilité + actions */}
        <Reveal>
          <SpotlightCard lift={false} className="h-full p-6 sm:p-8">
            <h3 className="text-gradient-fg font-semibold text-2xl md:text-3xl tracking-tight leading-tight">
              {contact.availability.lead}{' '}
              <span className="text-gradient-accent">
                {contact.availability.highlight}
              </span>
            </h3>
            <p className="mt-5 text-sm md:text-base text-fg-muted leading-relaxed max-w-[52ch]">
              {contact.availability.text}
            </p>
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href={contact.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex justify-center items-center px-6 py-3 rounded-lg bg-accent text-white font-semibold text-sm shadow-cta transition duration-200 ease-expo hover:bg-accent-bright hover:shadow-cta-hover active:scale-[0.98]"
              >
                <span aria-hidden="true" className="mr-2">{contact.ctaPrimary.emoji}</span>
                {contact.ctaPrimary.label}
              </a>
              <a
                href={contact.ctaSecondary.href}
                className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-surface text-fg font-semibold text-sm shadow-inset-highlight transition duration-200 ease-expo hover:bg-surface-hover hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_20px_rgba(94,106,210,0.15)] active:scale-[0.98]"
              >
                <span aria-hidden="true" className="mr-2">{contact.ctaSecondary.emoji}</span>
                {contact.ctaSecondary.label}
              </a>
            </div>
          </SpotlightCard>
        </Reveal>

        {/* Canaux directs */}
        <div className="flex flex-col gap-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={80 + i * 80}>
              <SpotlightCard className="px-5 py-4">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-10 h-10 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.1] to-white/[0.02] shadow-inset-highlight flex items-center justify-center font-mono text-sm font-semibold text-fg"
                  >
                    {c.icon}
                  </span>
                  <div className="min-w-0 flex flex-col gap-0.5">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-fg-muted">{c.label}</span>
                    <a
                      href={c.href}
                      target={c.external ? '_blank' : undefined}
                      rel={c.external ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-fg transition-colors duration-200 hover:text-accent-2 break-words"
                    >
                      {c.value}
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
