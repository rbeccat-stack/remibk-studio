'use client'

import { useState } from 'react'
import { nav } from '@/lib/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-base/90 backdrop-blur-md shadow-[0_10px_20px_-14px_var(--color-shade)]">
      {/* Rainure usinée : liseré clair sous le trait sombre */}
      <span aria-hidden className="pointer-events-none absolute inset-x-0 -bottom-[2px] h-px bg-white" />
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#accueil" className="flex flex-col leading-none rounded-lg">
          <span className="font-extrabold tracking-tight text-fg text-shadow-emboss text-lg">{nav.name}</span>
          <span className="mt-0.5 flex items-center gap-1.5">
            <span aria-hidden className="led led-green h-1.5 w-1.5 animate-pulse" />
            <span className="font-mono text-[10px] font-bold tracking-[0.08em] uppercase text-fg-muted">{nav.tagline}</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-fg-muted transition duration-200 hover:bg-bg-base hover:text-fg hover:shadow-recessed-sm"
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
          className="key-primary hidden md:inline-flex items-center px-4 py-1.5 rounded-lg text-xs"
        >
          {nav.cta}
        </a>

        {/* Mobile burger */}
        <button
          type="button"
          className={`md:hidden -mr-1 flex h-11 w-11 items-center justify-center rounded-xl bg-bg-base text-fg transition duration-150 ${
            menuOpen ? 'shadow-pressed-sm' : 'shadow-key'
          }`}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
          className="md:hidden animate-menu-in border-t border-border bg-bg-base/95 backdrop-blur-md px-5 py-4 flex flex-col gap-1 shadow-[inset_0_1px_0_#fff]"
        >
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="flex min-h-12 items-center rounded-lg px-3 text-base font-medium text-fg transition duration-200 hover:shadow-recessed-sm active:shadow-recessed-sm"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="key-primary mt-3 inline-flex min-h-12 justify-center items-center px-4 py-3 rounded-xl text-sm"
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  )
}
