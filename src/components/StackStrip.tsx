import type { SimpleIcon } from 'simple-icons'
import {
  siHubspot,
  siMake,
  siN8n,
  siAirtable,
  siNotion,
  siClaude,
  siCursor,
  siFigma,
} from 'simple-icons'
import { stack } from '@/lib/content'

// Marques disponibles dans simple-icons. Les autres (Sales Navigator, Pharow,
// Evaboot, Societeinfo, Claude Code, Excel) s'affichent en texte — LinkedIn et
// Microsoft ont été retirés de simple-icons.
const LOGOS: Record<string, SimpleIcon> = {
  HubSpot: siHubspot,
  Make: siMake,
  n8n: siN8n,
  Airtable: siAirtable,
  Notion: siNotion,
  Claude: siClaude,
  Cursor: siCursor,
  Figma: siFigma,
}

function Item({ tool }: { tool: string }) {
  const icon = LOGOS[tool]
  return (
    <span className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
      {icon && (
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-current text-text-main shrink-0"
          aria-hidden="true"
        >
          <path d={icon.path} />
        </svg>
      )}
      <span className="text-sm font-sans font-medium text-muted whitespace-nowrap">{tool}</span>
    </span>
  )
}

export default function StackStrip() {
  return (
    <section id="stack" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
      <h2 className="font-serif font-bold text-2xl md:text-3xl text-text-main mb-2">
        Stack &amp; outils
      </h2>
      <p className="text-muted text-sm font-sans mb-10">
        Les outils que j&apos;utilise pour scraper, automatiser, analyser, structurer et exécuter.
      </p>

      <div className="marquee-track overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="animate-marquee flex w-max items-center">
          <div className="flex items-center gap-10 pr-10">
            {stack.map((tool) => (
              <Item key={tool} tool={tool} />
            ))}
          </div>
          <div className="flex items-center gap-10 pr-10" aria-hidden="true">
            {stack.map((tool) => (
              <Item key={`${tool}-dup`} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
