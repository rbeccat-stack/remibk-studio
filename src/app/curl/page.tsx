import type { Metadata } from 'next'
import Link from 'next/link'
import ApiConsole from '@/components/ApiConsole'
import Footer from '@/components/Footer'
import { curlPage, nav } from '@/lib/content'

export const metadata: Metadata = {
  title: curlPage.metaTitle,
  description: curlPage.metaDescription,
}

// Vitrine de l'API clin d'œil /api/remi : choisir son outil, copier la commande ou essayer en direct.
export default function Page() {
  const p = curlPage

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

      <main className="max-w-[1000px] mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-[640px]">
          <p className="flex items-center gap-2.5 font-mono text-xs text-fg-muted">
            <span aria-hidden className="dot dot-green h-1.5 w-1.5 animate-pulse" />
            {p.eyebrow}
          </p>
          <h1 className="mt-4 text-fg font-medium text-4xl md:text-5xl tracking-[-0.022em] leading-[1.1]">
            {p.title}
          </h1>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-fg-secondary">{p.lead}</p>
        </div>

        <div className="mt-10">
          <ApiConsole texts={p} />
        </div>

        <p className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-fg-muted">
          {p.footerNote}
          <Link href={p.footerCta.href} className="key-chassis inline-flex min-h-11 items-center rounded-full px-5 text-sm">
            {p.footerCta.label}
          </Link>
        </p>
      </main>

      <Footer />
    </>
  )
}
