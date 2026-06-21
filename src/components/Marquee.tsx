import { marqueeText } from '@/lib/content'

export default function Marquee() {
  const repeated = `${marqueeText}   ${marqueeText}   `

  return (
    <div className="marquee-track overflow-hidden bg-bg-dark border-y border-border-dark/10 py-3 select-none">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-muted pr-12">
          {repeated}
        </span>
        <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-muted pr-12" aria-hidden>
          {repeated}
        </span>
      </div>
    </div>
  )
}
