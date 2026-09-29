import type { ReactNode } from 'react'

type LedColor = 'red' | 'green' | 'amber'

interface PanelProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article'
  /** Soulève le module au survol (désactivé pour les cartes à contenu interactif). */
  lift?: boolean
  /** Élévation haute permanente (état ouvert, actif…). */
  elevated?: boolean
  /** Fentes d'aération en haut à droite. */
  vents?: boolean
  /** LED d'état en haut à droite, à gauche des fentes. */
  led?: LedColor
}

const ledClass: Record<LedColor, string> = {
  red: 'led-red',
  green: 'led-green',
  amber: 'led-amber',
}

// Module boulonné sur le châssis : ombre neumorphique, vis dans les angles.
export default function Panel({
  children,
  className = '',
  as: Tag = 'div',
  lift = true,
  elevated = false,
  vents = false,
  led,
}: PanelProps) {
  return (
    <Tag
      className={`group relative rounded-2xl bg-bg-base transition duration-300 ease-spring ${
        elevated ? 'shadow-floating' : 'shadow-card'
      } ${lift ? 'hover:-translate-y-1 hover:shadow-floating' : ''} ${className}`}
    >
      <span aria-hidden className="screws pointer-events-none absolute inset-0 rounded-2xl" />
      {(vents || led) && (
        <span aria-hidden className="pointer-events-none absolute right-7 top-3.5 flex items-center gap-1">
          {led && <span className={`led ${ledClass[led]} mr-2 h-2 w-2`} />}
          {vents &&
            [0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-6 w-1 rounded-full bg-recessed shadow-[inset_1px_1px_2px_rgba(0,0,0,0.18)]"
              />
            ))}
        </span>
      )}
      <div className="relative flex h-full flex-col">{children}</div>
    </Tag>
  )
}
