import { stack } from '@/lib/content'

export default function StackStrip() {
  return (
    <section id="stack" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
      <h2 className="font-serif font-bold text-2xl md:text-3xl text-text-main mb-2">
        Stack & outils
      </h2>
      <p className="text-muted text-sm font-sans mb-10">Les outils que j&apos;utilise pour scraper, automatiser, analyser, structurer et exécuter.</p>
      <div className="flex flex-wrap gap-3">
        {stack.map((tool) => (
          <span
            key={tool}
            className="px-4 py-2 rounded-full border border-border-dark/15 bg-card text-muted text-sm font-sans font-medium opacity-60 hover:opacity-100 transition-opacity cursor-default"
          >
            {tool}
          </span>
        ))}
      </div>
    </section>
  )
}
