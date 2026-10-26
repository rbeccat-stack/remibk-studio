import Panel from '@/components/Panel'
import PromptPreview from '@/components/PromptPreview'

interface FeatureCardProps {
  icon: string
  title: string
  bullets: string[]
  accent: 'terracotta' | 'sage' | 'purple'
  /** Lien « voir le prompt » : le texte s'affiche au survol. */
  promptLink?: { label: string; text: string }
}

const led = {
  terracotta: 'red',
  sage: 'green',
  purple: 'amber',
} as const

export default function FeatureCard({ icon, title, bullets, accent, promptLink }: FeatureCardProps) {
  return (
    <Panel vents led={led[accent]} className="h-full p-6 md:p-8">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bg-base text-2xl shadow-key">
        {/* Pictogramme en niveaux de gris, se colore au survol du module */}
        <span className="grayscale transition duration-500 group-hover:grayscale-0">{icon}</span>
      </div>
      <h3 className="mt-5 font-bold text-xl tracking-tight text-fg">{title}</h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2.5">
            <span aria-hidden className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-[2px] bg-border-strong shadow-[1px_1px_0_#fff]" />
            <span className="text-sm text-fg-muted leading-relaxed">{b}</span>
          </li>
        ))}
      </ul>
      {promptLink && <PromptPreview {...promptLink} />}
    </Panel>
  )
}
