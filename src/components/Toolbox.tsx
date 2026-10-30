import SectionTitle from '@/components/SectionTitle'
import PillBadge from '@/components/PillBadge'
import Panel from '@/components/Panel'
import Reveal from '@/components/Reveal'
import { toolGroups, toolLevels, type ToolLevel } from '@/lib/content'

const LEVELS: ToolLevel[] = [3, 2, 1]

// Niveau affiché comme une rangée de pastilles vertes : pleines = niveau atteint.
// Pas de rouge ici : il se lirait comme une alerte sur une compétence.
function LevelDots({ level, srLabel = true }: { level: ToolLevel; srLabel?: boolean }) {
  const { label } = toolLevels[level]

  return (
    <span className="inline-flex items-center gap-1.5" title={label}>
      {[1, 2, 3].map((n) => (
        <span key={n} aria-hidden="true" className={`dot h-1.5 w-1.5 ${n <= level ? 'dot-green' : 'dot-off'}`} />
      ))}
      {srLabel && <span className="sr-only">{label}</span>}
    </span>
  )
}

export default function Toolbox() {
  return (
    <section id="outils" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
      <Reveal>
        <SectionTitle
          title="Ma boîte à outils"
          underlineWord="outils"
          accent="sage"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {toolGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <Panel className="h-full p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-medium text-lg tracking-[-0.012em] text-fg leading-tight">{group.title}</h3>
                <PillBadge accent="sage">{group.tag}</PillBadge>
              </div>

              <ul className="mt-4 divide-y divide-border">
                {group.tools.map((tool) => (
                  <li key={tool.name} className="flex items-center justify-between gap-4 py-2.5">
                    <span className="text-sm text-fg-secondary">{tool.name}</span>
                    <LevelDots level={tool.level} />
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        ))}
      </div>

      {/* Légende des niveaux */}
      <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
        {LEVELS.map((level) => (
          <li key={level} className="flex items-center gap-2">
            <LevelDots level={level} srLabel={false} />
            <span className="text-sm text-fg-muted">{toolLevels[level].label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
