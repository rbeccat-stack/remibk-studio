import { footer } from '@/lib/content'

export default function Footer() {
  return (
    <footer className="border-t border-border-dark/15 bg-bg-dark">
      <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-6">
        <p className="text-xs font-sans text-muted">{footer.copy}</p>
      </div>
    </footer>
  )
}
