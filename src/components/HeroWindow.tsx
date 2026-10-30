import WordCycle from '@/components/WordCycle'

interface HeroWindowProps {
  lead: string
  keywords: string[]
}

// Ligne de squelette d'interface (texte factice, purement décoratif).
function Bar({ className = '' }: { className?: string }) {
  return <span className={`block h-1.5 rounded-full bg-white/[0.07] ${className}`} />
}

// Fenêtre d'application sombre : barre de titre, barre latérale en squelette,
// zone principale qui diffuse le mot-clé du moment.
export default function HeroWindow({ lead, keywords }: HeroWindowProps) {
  return (
    <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[480px] md:ml-auto md:mr-0">
      {/* Halo indigo derrière la fenêtre */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-y-10 inset-x-0 bg-[radial-gradient(ellipse_at_center,rgba(94,106,210,0.22),transparent_65%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-panel shadow-floating">
        {/* Barre de titre */}
        <div aria-hidden className="flex h-9 items-center gap-1.5 border-b border-border px-3.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          ))}
          <Bar className="mx-auto w-24" />
        </div>

        <div className="flex">
          {/* Barre latérale */}
          <div aria-hidden className="hidden w-[28%] shrink-0 flex-col gap-3 border-r border-border p-3.5 sm:flex">
            <Bar className="w-3/4" />
            <span className="flex items-center gap-2 rounded-md bg-white/[0.04] px-1.5 py-1.5">
              <span className="dot dot-accent h-1.5 w-1.5" />
              <Bar className="w-full bg-white/[0.12]" />
            </span>
            <Bar className="w-2/3" />
            <Bar className="w-4/5" />
            <Bar className="mt-3 w-1/2 bg-white/[0.04]" />
            <Bar className="w-3/4" />
            <Bar className="w-2/3" />
          </div>

          {/* Zone principale */}
          <div className="@container relative flex-1">
            <div className="flex aspect-[4/3] flex-col justify-center px-[7cqw]">
              <p className="font-mono text-[clamp(10px,3.4cqw,13px)] text-fg-muted">{lead}</p>
              <WordCycle
                words={keywords}
                className="mt-[2.5cqw] max-w-full font-medium leading-[1.05] tracking-[-0.03em] text-fg text-[11cqw]"
              />
              <div aria-hidden className="mt-[7cqw] flex flex-col gap-2.5">
                {['w-full', 'w-5/6', 'w-2/3'].map((w, i) => (
                  <span key={w} className="flex items-center gap-2.5">
                    <span className={`dot h-1.5 w-1.5 ${i === 0 ? 'dot-green' : i === 1 ? 'dot-amber' : 'dot-off'}`} />
                    <Bar className={w} />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
