'use client'

import { useState } from 'react'
import { nav } from '@/lib/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0b0b0bcc] backdrop-blur-md">
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#accueil" className="flex flex-col leading-none rounded-lg">
          <span className="font-semibold tracking-[-0.01em] text-fg text-base">{nav.name}</span>
          <span className="mt-1 flex items-center gap-1.5">
            <span aria-hidden className="dot dot-green h-1.5 w-1.5 animate-pulse" />
            <span className="font-mono text-[11px] text-fg-muted">{nav.tagline}</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-[13px] text-fg-muted transition-colors duration-200 hover:text-fg"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href={nav.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="key-primary hidden md:inline-flex h-8 items-center px-3.5 rounded-full text-[13px]"
        >
          {nav.cta}
        </a>

        {/* Mobile burger */}
        <button
          type="button"
          className={`md:hidden -mr-1 flex h-11 w-11 items-center justify-center rounded-xl border text-fg transition-colors duration-150 ${
            menuOpen ? 'border-border-strong bg-surface' : 'border-border bg-transparent'
          }`}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" aria-hidden="true">
            {menuOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
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
        <nav
          id="mobile-menu"
          aria-label="Navigation principale"
          className="md:hidden animate-menu-in border-t border-white/[0.08] bg-bg-base/95 backdrop-blur-md px-5 py-4 flex flex-col gap-1"
        >
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex min-h-12 items-center rounded-lg px-3 text-base text-fg-secondary transition-colors duration-200 hover:bg-white/5 hover:text-fg active:bg-white/5"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="key-primary mt-3 inline-flex min-h-12 justify-center items-center px-5 rounded-full text-[15px]"
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  )
}
