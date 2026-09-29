import WordCycle from '@/components/WordCycle'

interface HeroTVProps {
  lead: string
  keywords: string[]
}

function Knob({ size, notch }: { size: 'lg' | 'sm'; notch: string }) {
  const box = size === 'lg' ? 'h-11 w-11' : 'h-8 w-8'
  const mark = size === 'lg' ? 'top-[7px] h-2.5' : 'top-[5px] h-2'
  const turn = size === 'lg' ? 'rotate-[40deg] group-hover:rotate-[160deg]' : '-rotate-[30deg] group-hover:rotate-[60deg]'

  return (
    <span className={`relative rounded-full bg-bg-base shadow-key ${box}`}>
      <span className="absolute inset-[5px] rounded-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.12),inset_-1px_-1px_2px_#fff]" />
      <span className={`absolute inset-0 transition-transform duration-700 ease-spring ${turn}`}>
        <span className={`absolute left-1/2 w-[3px] -translate-x-1/2 rounded-full ${mark} ${notch}`} />
      </span>
    </span>
  )
}

// Téléviseur en plastique châssis : écran cathodique encastré qui diffuse le
// mot-clé du moment, molettes, grille de haut-parleur et LED sur le côté.
export default function HeroTV({ lead, keywords }: HeroTVProps) {
  return (
    <div className="group relative mx-auto w-full max-w-[400px] pt-10 sm:max-w-[460px] md:ml-auto md:mr-0">
      {/* Antenne */}
      <div aria-hidden className="absolute left-1/2 top-0 h-10 w-28 -translate-x-1/2">
        {['-rotate-[32deg]', 'rotate-[32deg]'].map((r) => (
          <span key={r} className={`absolute bottom-1 left-1/2 h-9 w-[3px] origin-bottom -translate-x-1/2 rounded-full bg-border-strong ${r}`}>
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-fg-muted" />
          </span>
        ))}
        <span className="absolute bottom-0 left-1/2 h-3 w-9 -translate-x-1/2 rounded-t-full bg-bg-base shadow-key" />
      </div>

      {/* Carrosserie */}
      <div className="relative rounded-[32px] bg-bg-base p-4 shadow-floating sm:p-5">
        <span aria-hidden className="screws pointer-events-none absolute inset-0 rounded-[32px]" />

        <div className="relative flex items-stretch gap-4">
          {/* Écran encastré dans son cadre sombre */}
          <div className="relative flex-1 rounded-[26px] bg-console p-2.5 shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5),inset_-1px_-1px_0_rgba(255,255,255,0.08),2px_2px_0_#ffffff]">
            <div className="@container relative aspect-[4/3] overflow-hidden rounded-[20px] bg-screen shadow-[inset_0_0_40px_rgba(0,0,0,0.9)]">
              <div className="relative flex h-full flex-col items-center justify-center px-[6cqw] text-center">
                <p className="font-mono text-[clamp(10px,3.4cqw,13px)] font-bold uppercase tracking-[0.12em] text-console-muted">
                  {lead}
                </p>
                <WordCycle
                  words={keywords}
                  className="mt-[2.5cqw] max-w-full font-extrabold leading-none tracking-tight text-accent text-shadow-phosphor text-[11cqw]"
                />
              </div>

              <span aria-hidden className="scanlines pointer-events-none absolute inset-0 opacity-40" />
              <span
                aria-hidden
                className="animate-crt-sweep pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(0,0,0,0.55)_100%)]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(255,255,255,0.1),transparent_50%)]"
              />
            </div>
          </div>

          {/* Commandes */}
          <div aria-hidden className="flex w-11 shrink-0 flex-col items-center justify-between py-1 sm:w-12">
            <Knob size="lg" notch="bg-accent" />
            <Knob size="sm" notch="bg-fg-muted" />
            <span className="h-16 w-9 rounded-lg bg-[radial-gradient(circle,#a3b1c6_1px,transparent_1.6px)] bg-[length:6px_6px] bg-center shadow-recessed-sm" />
            <span className="led led-green h-2 w-2 animate-pulse" />
          </div>
        </div>
      </div>

      {/* Pieds */}
      <div aria-hidden className="flex justify-between px-12">
        <span className="h-3 w-12 rounded-b-xl bg-bg-base shadow-[4px_4px_8px_#babecc]" />
        <span className="h-3 w-12 rounded-b-xl bg-bg-base shadow-[4px_4px_8px_#babecc]" />
      </div>
    </div>
  )
}
