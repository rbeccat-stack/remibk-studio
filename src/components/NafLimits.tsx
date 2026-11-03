import SectionTitle from '@/components/SectionTitle'
import Panel from '@/components/Panel'
import Reveal from '@/components/Reveal'
import { naf } from '@/lib/content'

// Limites du code NAF, puis la méthode qui les contourne (hiérarchie de preuves).
export default function NafLimits() {
  return (
    <section id="code-naf" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
      <Reveal>
        <SectionTitle title={naf.title} underlineWord={naf.underlineWord} subtitle={naf.subtitle} />
      </Reveal>

      {/* Les limites, chiffrées */}
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {naf.limits.map((limit, i) => (
          <Reveal key={limit.value} delay={i * 80} className="h-full">
            <Panel className="h-full p-6" dot="amber">
              <p className="text-fg font-medium text-4xl tracking-[-0.022em] leading-none">{limit.value}</p>
              <p className="mt-2 text-fg-secondary text-[15px]">{limit.label}</p>
              <p className="mt-4 text-fg-muted text-sm leading-relaxed">{limit.detail}</p>
            </Panel>
          </Reveal>
        ))}
      </div>

      {/* La méthode */}
      <Reveal>
        <Panel className="mt-5 p-6 md:p-8" lift={false}>
          <h3 className="text-fg font-medium text-xl md:text-2xl tracking-[-0.018em]">{naf.methodTitle}</h3>
          <p className="mt-2 max-w-2xl text-fg-muted text-[15px] leading-relaxed">{naf.methodIntro}</p>

          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {naf.steps.map((step, i) => (
              <li key={step.title} className="border-t border-border pt-4">
                <span className="font-mono text-xs text-accent-ink">0{i + 1}</span>
                <h4 className="mt-2 text-fg font-medium tracking-[-0.012em]">{step.title}</h4>
                <p className="mt-2 text-fg-muted text-sm leading-relaxed">{step.text}</p>
                <p className="mt-3 font-mono text-[11px] text-fg-muted">{step.source}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8 flex flex-col gap-4 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-fg-secondary text-[15px] leading-relaxed">{naf.takeaway}</p>
            <a
              href={naf.link.href}
              className="key-chassis shrink-0 self-start rounded-full px-5 py-2.5 text-sm font-medium md:self-auto"
            >
              {naf.link.label} →
            </a>
          </div>
        </Panel>
      </Reveal>
    </section>
  )
}
