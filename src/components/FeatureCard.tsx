import Panel from '@/components/Panel'
import BulletDetail, { type DetailedBullet } from '@/components/BulletDetail'

interface FeatureCardProps {
  icon: string
  title: string
  /** Une puce peut porter un détail affiché au survol (+ fichier à télécharger). */
  bullets: (string | DetailedBullet)[]
  accent: 'terracotta' | 'sage' | 'purple'
}

const dot = {
  terracotta: 'accent',
  sage: 'green',
  purple: 'amber',
} as const

export default function FeatureCard({ icon, title, bullets, accent }: FeatureCardProps) {
  return (
    <Panel dot={dot[accent]} className="h-full p-6 md:p-7">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-xl">
        {/* Pictogramme en niveaux de gris, se colore au survol de la carte */}
        <span className="grayscale transition duration-500 group-hover:grayscale-0">{icon}</span>
      </div>
      <h3 className="mt-5 font-medium text-lg tracking-[-0.012em] text-fg">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {bullets.map((b) => (
          <li key={typeof b === 'string' ? b : b.text} className="flex items-start gap-2.5">
            <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-fg-subtle" />
            {typeof b === 'string' ? (
              <span className="text-sm text-fg-muted leading-relaxed">{b}</span>
            ) : (
              <BulletDetail {...b} />
            )}
          </li>
        ))}
      </ul>
    </Panel>
  )
}
