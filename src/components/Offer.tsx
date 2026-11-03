import SectionTitle from '@/components/SectionTitle'
import Panel from '@/components/Panel'
import Reveal from '@/components/Reveal'
import { offer } from '@/lib/content'

// Ce que je fais pour l'entreprise : une ligne par volet (promesse, livrables, preuve).
export default function Offer() {
  return (
    <section id="offre" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
      <Reveal>
        <SectionTitle title={offer.title} underlineWord={offer.underlineWord} subtitle={offer.subtitle} />
      </Reveal>

      <Reveal>
        <Panel className="mt-10" lift={false}>
          <ol className="divide-y divide-border">
            {offer.axes.map((axis, i) => {
              const { href, label } = axis.proof
              const external = href?.startsWith('http')
              return (
                <li
                  key={axis.label}
                  className="grid gap-4 p-6 md:grid-cols-[180px_1fr] md:gap-8 md:p-8 lg:grid-cols-[180px_1fr_240px]"
                >
                  <div className="flex items-baseline gap-3 md:flex-col md:gap-1">
                    <span className="font-mono text-xs text-accent-ink">0{i + 1}</span>
                    <h3 className="text-fg font-medium text-xl tracking-[-0.018em]">{axis.label}</h3>
                  </div>

                  <div>
                    <p className="text-fg-secondary text-[15px] md:text-base leading-relaxed">{axis.promise}</p>
                    <ul className="mt-3 space-y-2">
                      {axis.deliverables.map((item) => (
                        <li key={item} className="flex gap-3 text-fg-muted text-sm leading-relaxed">
                          <span aria-hidden className="dot dot-off mt-[7px] h-1.5 w-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-start-2 lg:col-start-auto">
                    <p className="font-mono text-[11px] text-fg-muted">Déjà livré</p>
                    {href ? (
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="mt-1 inline-block text-sm text-fg-secondary underline decoration-border-strong underline-offset-4 transition-colors duration-200 ease-quart hover:text-fg hover:decoration-fg-muted"
                      >
                        {label} →
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-fg-secondary">{label}</p>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        </Panel>
      </Reveal>
    </section>
  )
}
