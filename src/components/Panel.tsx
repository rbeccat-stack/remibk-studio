import type { ReactNode } from 'react'

type DotColor = 'accent' | 'green' | 'amber'

interface PanelProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article'
  /** Éclaircit le filet au survol (désactivé pour les cartes à contenu interactif). */
  lift?: boolean
  /** Surface surélevée permanente (état ouvert, actif…). */
  elevated?: boolean
  /** Pastille de statut en haut à droite. */
  dot?: DotColor
}

const dotClass: Record<DotColor, string> = {
  accent: 'dot-accent',
  green: 'dot-green',
  amber: 'dot-amber',
}

// Carte plate : fond panel, filet de 1 px, reflet clair sur l'arête haute.
export default function Panel({
  children,
  className = '',
  as: Tag = 'div',
  lift = true,
  elevated = false,
  dot,
}: PanelProps) {
  return (
    <Tag
      className={`group relative rounded-2xl border bg-panel shadow-card transition-colors duration-300 ease-quart ${
        elevated ? 'border-border-strong' : 'border-border'
      } ${lift ? 'hover:border-border-strong' : ''} ${className}`}
    >
      {dot && (
        <span aria-hidden className={`dot ${dotClass[dot]} pointer-events-none absolute right-5 top-5 h-1.5 w-1.5`} />
      )}
      <div className="relative flex h-full flex-col">{children}</div>
    </Tag>
  )
}
