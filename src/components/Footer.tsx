import { footer } from '@/lib/content'

// Plaque de base sombre : la seule surface foncée du site, comme le socle d'un appareil.
export default function Footer() {
  return (
    <footer className="relative bg-console shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_-6px_16px_-8px_var(--color-shade)]">
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-6 flex items-center justify-between gap-4">
        <p className="flex items-center gap-2.5 font-mono text-xs tracking-wide text-console-muted">
          <span aria-hidden className="led led-green h-2 w-2 animate-pulse" />
          {footer.copy}
        </p>
        <a
          href={footer.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Profil LinkedIn de Rémi BECCAT"
          className="shrink-0 rounded-lg p-3 text-console-muted transition duration-200 ease-spring hover:bg-white/10 hover:text-white active:translate-y-px"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
