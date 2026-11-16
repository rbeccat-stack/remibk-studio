import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import AgentConsole from '@/components/AgentConsole'
import { agent, nav } from '@/lib/content'

export const metadata: Metadata = {
  title: agent.page.metaTitle,
  description: agent.page.metaDescription,
}

// Page d'atterrissage du QR code des lettres : la console d'appel est le cœur de la page.
export default function Page() {
  const p = agent.page

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0b0b0bcc] backdrop-blur-md">
        <div className="max-w-[1120px] mx-auto px-5 md:px-6 flex items-center justify-between gap-4 h-14">
          <Link href="/" className="font-semibold tracking-[-0.01em] text-fg text-base rounded-lg">
            {nav.name}
          </Link>
          <Link
            href="/"
            className="flex min-h-11 items-center text-[13px] text-fg-muted transition-colors duration-200 hover:text-fg"
          >
            Voir le portfolio
          </Link>
        </div>
      </header>

      <main className="max-w-[1120px] mx-auto px-5 md:px-6 pt-12 pb-20 md:pt-20 md:pb-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,460px)] lg:grid-rows-[auto_1fr] lg:gap-x-16 lg:gap-y-10">
          {/* Accroche */}
          <div className="lg:col-start-1 lg:row-start-1">
            <h1 className="max-w-[16ch] text-fg font-medium text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] tracking-[-0.022em] text-balance">
              {p.title}
            </h1>
            <p className="mt-6 max-w-[46ch] text-base md:text-[17px] leading-relaxed text-fg-muted">{p.lead}</p>
          </div>

          {/* Console d'appel */}
          <div className="animate-fade-up lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <AgentConsole />
          </div>

          {/* Conditions et alternative */}
          <div className="lg:col-start-1 lg:row-start-2">
            <dl className="grid max-w-[460px] grid-cols-3 gap-4 border-t border-border pt-5">
              {p.facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-[11px] text-fg-muted">{f.label}</dt>
                  <dd className="mt-1 text-sm text-fg">{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-sm text-fg-muted">{p.fallback.note}</p>
            <a
              href={p.fallback.href}
              target="_blank"
              rel="noopener noreferrer"
              className="key-chassis mt-3 inline-flex min-h-11 items-center px-5 rounded-full text-sm"
            >
              {p.fallback.label}
            </a>
          </div>
        </div>

        {/* Fabrication */}
        <section className="mt-20 md:mt-28" aria-labelledby="built-title">
          <h2 id="built-title" className="text-fg font-medium text-xl md:text-2xl tracking-[-0.022em]">
            {p.builtTitle}
          </h2>
          <dl className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
            {p.built.map((item) => (
              <div key={item.label} className="border-t border-border py-5">
                <dt className="font-mono text-[11px] text-fg-muted">{item.label}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-fg-secondary">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <Footer />
    </>
  )
}
