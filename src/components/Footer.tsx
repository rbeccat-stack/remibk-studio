import { footer } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="border-t border-border-dark/15 bg-bg-dark">
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs font-sans text-muted">{footer.copy}</p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          {footer.links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs font-sans text-muted hover:text-text-main transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
