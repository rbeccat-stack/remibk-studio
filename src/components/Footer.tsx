import { footer } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg-deep">
      <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-6 flex items-center justify-between gap-4">
        <p className="font-mono text-xs tracking-wide text-fg-muted">{footer.copy}</p>
        <a
          href={footer.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn de Rémi BECCAT"
          className="shrink-0 rounded-lg p-2 text-fg-muted transition duration-200 ease-expo hover:bg-surface hover:text-fg"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
