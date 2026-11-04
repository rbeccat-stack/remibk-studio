import Link from 'next/link'
import Footer from '@/components/Footer'
import { nav, type LegalDocument } from '@/lib/content'

const linkClass =
  'text-accent-ink underline underline-offset-2 transition-colors duration-200 hover:text-fg break-words'

// Transforme les liens [libellé](url) du texte en balises <a> ou <Link>.
function renderText(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (!match) return part
    const [, label, href] = match
    if (href.startsWith('/')) {
      return (
        <Link key={i} href={href} className={linkClass}>
          {label}
        </Link>
      )
    }
    const external = href.startsWith('http')
    return (
      <a
        key={i}
        href={href}
        className={linkClass}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {label}
      </a>
    )
  })
}

function Paragraphs({ items }: { items?: string[] }) {
  return items?.map((text) => (
    <p key={text} className="mt-3 text-sm md:text-base leading-relaxed text-fg-secondary">
      {renderText(text)}
    </p>
  ))
}

export default function LegalPage({ doc }: { doc: LegalDocument }) {
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
            ← Retour au site
          </Link>
        </div>
      </header>

      <main className="max-w-[720px] mx-auto px-5 md:px-6 py-12 md:py-20">
        <h1 className="text-fg font-medium text-3xl md:text-4xl tracking-[-0.022em] leading-[1.15]">
          {doc.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-fg-secondary">{doc.intro}</p>
        <p className="mt-4 font-mono text-xs text-fg-muted">{doc.updated}</p>

        {doc.sections.map((section) => (
          <section key={section.heading} className="mt-10 border-t border-border pt-8">
            <h2 className="text-fg font-medium text-lg md:text-xl tracking-[-0.022em]">
              {section.heading}
            </h2>
            <Paragraphs items={section.paragraphs} />
            {section.list && (
              <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-sm md:text-base leading-relaxed text-fg-secondary marker:text-fg-muted">
                {section.list.map((item) => (
                  <li key={item}>{renderText(item)}</li>
                ))}
              </ul>
            )}
            <Paragraphs items={section.after} />
          </section>
        ))}
      </main>

      <Footer />
    </>
  )
}
