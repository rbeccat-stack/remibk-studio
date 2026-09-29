import SectionTitle from '@/components/SectionTitle'
import PillBadge from '@/components/PillBadge'
import Panel from '@/components/Panel'
import Reveal from '@/components/Reveal'
import { toolGroups, toolLevels, toolsIntro, type ToolLevel } from '@/lib/content'

const LEVELS: ToolLevel[] = [3, 2, 1]

// Niveau affiché comme une rangée de LEDs vertes : allumées = niveau atteint.
// Pas de rouge ici : il se lirait comme une alerte sur une compétence.
function LevelDots({ level, srLabel = true }: { level: ToolLevel; srLabel?: boolean }) {
  const { label, hint } = toolLevels[level]

  return (
    <span className="inline-flex items-center gap-1.5" title={`${label} — ${hint}`}>
      {[1, 2, 3].map((n) => (
        <span key={n} aria-hidden="true" className={`led h-2 w-2 ${n <= level ? 'led-green' : 'led-off'}`} />
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
          subtitle={toolsIntro}
          accent="sage"
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {toolGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 80}>
            <Panel className="h-full p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-bold text-lg tracking-tight text-fg leading-tight">{group.title}</h3>
                <PillBadge accent="sage">{group.tag}</PillBadge>
              </div>

              <ul className="mt-4 divide-y divide-border [&>li+li]:shadow-[inset_0_1px_0_#fff]">
                {group.tools.map((tool) => (
                  <li key={tool.name} className="flex items-center justify-between gap-4 py-2.5">
                    <span className="text-sm font-medium text-fg">{tool.name}</span>
                    <LevelDots level={tool.level} />
                  </li>
                ))}
              </ul>
            </Panel>
          </Reveal>
        ))}
      </div>

      {/* Légende des niveaux */}
      <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
        {LEVELS.map((level) => (
          <div key={level} className="flex items-center gap-2.5">
            <dt className="flex items-center gap-2">
              <LevelDots level={level} srLabel={false} />
              <span className="text-sm font-bold text-fg">{toolLevels[level].label}</span>
            </dt>
            <dd className="text-sm text-fg-muted">{toolLevels[level].hint}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
