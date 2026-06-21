'use client'

import { useState } from 'react'
import { nav } from '@/lib/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border-dark/10 bg-bg/80 backdrop-blur-md">
      <div className="max-w-[1120px] mx-auto px-6 md:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#accueil" className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded">
          <span className="font-serif font-bold text-text-main text-lg">{nav.name}</span>
          <span className="text-muted text-[10px] font-sans tracking-widest uppercase">{nav.tagline}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navigation principale">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-sans text-muted hover:text-text-main transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={nav.ctaHref}
          className="hidden md:inline-flex items-center px-4 py-1.5 rounded-full bg-terracotta text-white text-sm font-sans font-semibold hover:bg-terracotta-dark transition-colors"
        >
          {nav.cta}
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-text-main"
          aria-label="Ouvrir le menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border-dark/10 bg-bg px-6 py-4 flex flex-col gap-4">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-sans text-text-main"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.ctaHref}
            className="inline-flex justify-center items-center px-4 py-2 rounded-full bg-terracotta text-white text-sm font-semibold"
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta}
          </a>
        </div>
      )}
    </header>
  )
}
