import Link from 'next/link'
import { footer } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between md:gap-4">
        <p className="flex items-center gap-2.5 font-mono text-xs text-fg-muted">
          <span aria-hidden className="dot dot-green h-1.5 w-1.5" />
          {footer.copy}
        </p>
        <div className="flex flex-wrap items-center justify-between gap-x-4 md:justify-end">
          <nav aria-label="Informations légales" className="flex items-center gap-4">
            {footer.legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex min-h-11 items-center text-[13px] text-fg-muted transition-colors duration-200 ease-quart hover:text-fg"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex shrink-0 items-center">
          <a
            href={footer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil LinkedIn de Rémi BECCAT"
            className="shrink-0 rounded-lg p-3 text-fg-muted transition-colors duration-200 ease-quart hover:bg-white/5 hover:text-fg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
            </svg>
          </a>
          <a
            href={footer.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Profil GitHub de Rémi BECCAT"
            className="shrink-0 rounded-lg p-3 text-fg-muted transition-colors duration-200 ease-quart hover:bg-white/5 hover:text-fg"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
