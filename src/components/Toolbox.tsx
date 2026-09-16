import SectionTitle from '@/components/SectionTitle'
import PillBadge from '@/components/PillBadge'
import { toolGroups, toolLevels, toolsIntro, type ToolLevel } from '@/lib/content'

const LEVELS: ToolLevel[] = [3, 2, 1]

function LevelDots({
  level,
  accent,
  srLabel = true,
}: {
  level: ToolLevel
  accent: 'terracotta' | 'sage'
  srLabel?: boolean
}) {
  const filled = accent === 'terracotta' ? 'bg-terracotta' : 'bg-sage'
  const empty = accent === 'terracotta' ? 'border-terracotta/35' : 'border-sage/35'
  const { label, hint } = toolLevels[level]

  return (
    <span className="inline-flex items-center gap-1.5" title={`${label} — ${hint}`}>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          aria-hidden="true"
          className={`w-2 h-2 rounded-full ${n <= level ? filled : `border ${empty}`}`}
        />
      ))}
      {srLabel && <span className="sr-only">{label}</span>}
    </span>
  )
}

export default function Toolbox() {
  return (
    <section id="outils" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
      <SectionTitle
        title="Ma boîte à outils"
        underlineWord="outils"
        subtitle={toolsIntro}
        accent="terracotta"
      />

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {toolGroups.map((group) => (
          <div
            key={group.title}
            className="border border-border-dark/12 rounded-2xl p-6 bg-card-light flex flex-col gap-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-serif font-bold text-lg text-text-main leading-tight">{group.title}</h3>
              <PillBadge accent={group.accent}>{group.tag}</PillBadge>
            </div>

            <ul className="divide-y divide-border-dark/10">
              {group.tools.map((tool) => (
                <li key={tool.name} className="flex items-center justify-between gap-4 py-2.5">
                  <span className="text-sm font-sans font-medium text-text-main">{tool.name}</span>
                  <LevelDots level={tool.level} accent={group.accent} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Légende des niveaux */}
      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
        {LEVELS.map((level) => (
          <div key={level} className="flex items-center gap-2.5">
            <dt className="flex items-center gap-2">
              <LevelDots level={level} accent="terracotta" srLabel={false} />
              <span className="text-sm font-sans font-semibold text-text-main">{toolLevels[level].label}</span>
            </dt>
            <dd className="text-sm font-sans text-muted">{toolLevels[level].hint}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
