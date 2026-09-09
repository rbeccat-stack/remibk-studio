import { nav } from '@/lib/content'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border-dark/10 bg-bg/80 backdrop-blur-md">
      <div className="max-w-[1120px] mx-auto px-6 md:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#accueil" className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded">
          <span className="font-serif font-bold text-text-main text-lg">{nav.name}</span>
          <span className="text-muted text-[10px] font-sans tracking-widest uppercase">{nav.tagline}</span>
        </a>

        {/* CTA */}
        <a
          href={nav.ctaHref}
          className="inline-flex items-center px-4 py-1.5 rounded-full bg-terracotta text-white text-sm font-sans font-semibold hover:bg-terracotta-dark transition-colors"
        >
          {nav.cta}
        </a>
      </div>
    </header>
  )
}
