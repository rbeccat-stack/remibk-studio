import SectionTitle from '@/components/SectionTitle'
import Panel from '@/components/Panel'
import Reveal from '@/components/Reveal'
import { contact, footer } from '@/lib/content'

const githubIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
)

const whatsappIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

const channels = [
  { icon: '✉', label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
  { icon: '📞', label: 'Téléphone', value: contact.phone, href: contact.phoneHref },
  { icon: whatsappIcon, label: 'WhatsApp', value: contact.phone, href: contact.whatsappHref, external: true },
  { icon: 'in', label: 'LinkedIn', value: contact.linkedinLabel, href: footer.linkedin, external: true },
  { icon: githubIcon, label: 'GitHub', value: contact.githubLabel, href: footer.github, external: true },
]

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
      <Reveal>
        <SectionTitle
          title={contact.title}
          subtitle={contact.subtitle}
          accent="terracotta"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-[1.25fr_1fr] md:gap-6">
        {/* Disponibilité + actions */}
        <Reveal>
          <Panel lift={false} className="h-full p-6 sm:p-8">
            <h3 className="text-fg font-medium text-2xl md:text-3xl tracking-[-0.022em] leading-[1.15]">
              {contact.availability.lead}{' '}
              <span className="text-accent-ink">
                {contact.availability.highlight}
              </span>
            </h3>
            <p className="mt-5 text-sm md:text-base text-fg-muted leading-relaxed max-w-[52ch]">
              {contact.availability.text}
            </p>
            <dl className="mt-6 grid gap-x-4 gap-y-3 sm:grid-cols-[auto_1fr]">
              {contact.terms.map((t) => (
                <div key={t.label} className="contents">
                  <dt className="font-mono text-xs text-fg-muted sm:pt-[3px]">
                    {t.label}
                  </dt>
                  <dd className="-mt-2 text-sm text-fg-secondary leading-relaxed sm:mt-0">
                    {t.strong && <strong className="font-semibold text-fg">{t.strong}</strong>}
                    {t.value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 border-t border-border pt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <a
                href={contact.ctaPrimary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="key-primary inline-flex min-h-11 justify-center items-center px-5 rounded-full text-[15px]"
              >
                <span aria-hidden="true" className="mr-2">{contact.ctaPrimary.emoji}</span>
                {contact.ctaPrimary.label}
              </a>
              <a
                href={contact.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="key-chassis inline-flex min-h-11 justify-center items-center px-5 rounded-full text-[15px]"
              >
                <span aria-hidden="true" className="mr-2">{contact.ctaSecondary.emoji}</span>
                {contact.ctaSecondary.label}
              </a>
            </div>
          </Panel>
        </Reveal>

        {/* Canaux directs */}
        <div className="flex flex-col gap-3">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={80 + i * 80}>
              <Panel className="px-5 py-4">
                <div className="flex items-center gap-4">
                  <span
                    aria-hidden="true"
                    className="shrink-0 w-10 h-10 rounded-lg border border-border bg-surface flex items-center justify-center font-mono text-sm font-semibold text-fg"
                  >
                    <span className="grayscale transition duration-500 group-hover:grayscale-0">{c.icon}</span>
                  </span>
                  <div className="min-w-0 flex flex-col gap-0.5">
                    <span className="font-mono text-xs text-fg-muted">{c.label}</span>
                    <a
                      href={c.href}
                      target={c.external ? '_blank' : undefined}
                      rel={c.external ? 'noopener noreferrer' : undefined}
                      className="text-sm font-medium text-fg transition-colors duration-200 hover:text-accent-ink break-words"
                    >
                      {c.value}
                    </a>
                  </div>
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
