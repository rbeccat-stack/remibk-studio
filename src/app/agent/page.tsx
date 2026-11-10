import type { Metadata } from 'next'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Panel from '@/components/Panel'
import { agent, nav } from '@/lib/content'

export const metadata: Metadata = {
  title: agent.page.metaTitle,
  description: agent.page.metaDescription,
}

const linkClass =
  'text-accent-ink underline underline-offset-2 transition-colors duration-200 hover:text-fg'

// Transforme les liens [libellé](url) du texte en <Link>.
function renderText(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!match) return part
    const [, label, href] = match
    return (
      <Link key={i} href={href} className={linkClass}>
        {label}
      </Link>
    )
  })
}

// Page d'atterrissage du QR code des lettres : présente l'assistant, le widget s'ouvre automatiquement.
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
            Voir le portfolio →
          </Link>
        </div>
      </header>

      <main className="max-w-[720px] mx-auto px-5 md:px-6 py-12 md:py-20">
        <p className="flex items-center gap-2.5 font-mono text-xs text-fg-muted">
          <span aria-hidden className="dot dot-green h-1.5 w-1.5 animate-pulse" />
          {p.eyebrow}
        </p>
        <h1 className="mt-4 text-fg font-medium text-4xl md:text-5xl tracking-[-0.022em] leading-[1.1]">
          {p.title}
        </h1>
        <p className="mt-5 text-base md:text-lg leading-relaxed text-fg-secondary">{p.lead}</p>
        <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-border-strong bg-surface px-4 py-2 text-sm text-fg">
          <span aria-hidden className="dot dot-accent h-1.5 w-1.5" />
          {p.hint}
        </p>

        <section className="mt-12">
          <h2 className="text-fg font-medium text-lg md:text-xl tracking-[-0.022em]">{p.canDoTitle}</h2>
          <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm md:text-base leading-relaxed text-fg-secondary marker:text-fg-muted">
            {p.canDo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-fg font-medium text-lg md:text-xl tracking-[-0.022em]">{p.builtTitle}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {p.built.map((item) => (
              <Panel key={item.label} className="p-5" lift={false}>
                <p className="font-mono text-[11px] text-fg-muted">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-secondary">{item.value}</p>
              </Panel>
            ))}
          </div>
        </section>

        <section className="mt-12 border-t border-border pt-8">
          <p className="text-sm leading-relaxed text-fg-muted">{renderText(p.privacy)}</p>
          <a
            href={p.fallback.href}
            target="_blank"
            rel="noopener noreferrer"
            className="key-chassis mt-6 inline-flex min-h-11 items-center px-5 rounded-full text-sm"
          >
            {p.fallback.label}
          </a>
        </section>
      </main>

      <Footer />
    </>
  )
}
