'use client'

import { useState } from 'react'
import { nav } from '@/lib/content'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-base/85 backdrop-blur-md">
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 flex items-center justify-between h-14">
        {/* Logo */}
        <a href="#accueil" className="flex flex-col leading-none rounded-lg">
          <span className="font-semibold tracking-tight text-fg text-lg">{nav.name}</span>
          <span className="font-mono text-[10px] tracking-widest uppercase text-fg-muted">{nav.tagline}</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-fg-muted transition duration-200 ease-expo hover:bg-surface hover:text-fg"
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
          className="btn-shine hidden md:inline-flex items-center px-4 py-1.5 rounded-lg bg-accent text-white text-sm font-semibold shadow-cta transition duration-200 ease-expo hover:bg-accent-bright hover:shadow-cta-hover active:scale-[0.98]"
        >
          {nav.cta}
        </a>

        {/* Mobile burger */}
        <button
          type="button"
          className="md:hidden -mr-2 rounded-lg p-2 text-fg transition duration-200 hover:bg-surface"
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
          className="md:hidden animate-menu-in border-t border-border bg-bg-base/95 backdrop-blur-md px-5 py-4 flex flex-col gap-1"
        >
          {nav.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-fg transition duration-200 hover:bg-surface"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href={nav.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex justify-center items-center px-4 py-3 rounded-lg bg-accent text-white text-sm font-semibold shadow-cta active:scale-[0.98]"
            onClick={() => setMenuOpen(false)}
          >
            {nav.cta}
          </a>
        </nav>
      )}
    </header>
  )
}
