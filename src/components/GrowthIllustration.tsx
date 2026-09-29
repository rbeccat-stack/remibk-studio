// Appareil de mesure : bezel sombre en fibre de carbone, écran cathodique
// encastré (balayage + reflet de vitre), LED d'alimentation et touches latérales.
export default function GrowthIllustration() {
  return (
    <div className="relative w-full max-w-[400px] sm:max-w-[440px] mx-auto md:ml-auto md:mr-0 transition-transform duration-500 ease-spring hover:scale-[1.015]">
      <div className="relative rounded-[28px] bg-console p-3 sm:p-3.5 shadow-floating">
        <span aria-hidden className="bg-carbon pointer-events-none absolute inset-0 rounded-[28px] opacity-40" />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_1px_1px_0_rgba(255,255,255,0.14),inset_-1px_-1px_0_rgba(0,0,0,0.45)]"
        />
        <span aria-hidden className="led led-green absolute right-6 top-[5px] h-1.5 w-1.5 animate-pulse" />
        <span aria-hidden className="absolute -right-[3px] top-20 h-10 w-[3px] rounded-r-sm bg-[#3b4346]" />
        <span aria-hidden className="absolute -right-[3px] top-32 h-6 w-[3px] rounded-r-sm bg-[#3b4346]" />

        <div className="relative overflow-hidden rounded-[18px] bg-screen shadow-[inset_0_2px_12px_rgba(0,0,0,0.85)]">
          <svg
            viewBox="0 0 440 376"
            role="img"
            aria-label="Illustration growth hacking : courbe de croissance, expérimentation A/B et automatisation multi-outils."
            className="relative block w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="gh-curve-grad" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0" stopColor="var(--color-accent)" />
                <stop offset="1" stopColor="#ffb3ba" />
              </linearGradient>
            </defs>

            <g transform="translate(0 6)">
              {/* Subtle grid */}
              <g stroke="#8fa3a8" strokeOpacity="0.16" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 8">
                <line x1="100" y1="56" x2="100" y2="338" />
                <line x1="180" y1="56" x2="180" y2="338" />
                <line x1="260" y1="56" x2="260" y2="338" />
                <line x1="340" y1="56" x2="340" y2="338" />
                <line x1="44" y1="110" x2="404" y2="110" />
                <line x1="44" y1="180" x2="404" y2="180" />
                <line x1="44" y1="250" x2="404" y2="250" />
              </g>

              {/* Baseline */}
              <line x1="48" y1="330" x2="400" y2="330" stroke="var(--color-console-muted)" strokeOpacity="0.4" strokeWidth="2" />

              {/* Ascending bars — with a deliberate dip on #3 (test & learn) */}
              <g fill="var(--color-accent)">
                <rect x="78" y="262" width="36" height="68" rx="7" fillOpacity="0.22" />
                <rect x="128" y="214" width="36" height="116" rx="7" fillOpacity="0.32" />
                <rect x="178" y="238" width="36" height="92" rx="7" fillOpacity="0.27" />
                <rect x="228" y="176" width="36" height="154" rx="7" fillOpacity="0.45" />
                <rect x="278" y="120" width="36" height="210" rx="7" fillOpacity="0.7" />
              </g>

              {/* A/B experiment tag above the dip */}
              <g className="gh-float-slow">
                <rect x="166" y="164" width="40" height="22" rx="11" fill="var(--color-accent)" />
                <rect x="166" y="164" width="40" height="22" rx="11" fill="none" stroke="#ffffff" strokeOpacity="0.25" />
                <text
                  x="186"
                  y="179"
                  textAnchor="middle"
                  fontFamily="var(--font-mono)"
                  fontSize="11"
                  fontWeight="700"
                  fill="#ffffff"
                >
                  A/B
                </text>
              </g>

              {/* Growth curve — trait large translucide en guise de halo phosphore */}
              <path
                className="gh-curve"
                d="M56 322 C 120 318 150 250 200 214 C 250 178 300 150 372 70"
                fill="none"
                stroke="var(--color-accent)"
                strokeOpacity="0.18"
                strokeWidth="10"
                strokeLinecap="round"
              />
              <path
                className="gh-curve"
                d="M56 322 C 120 318 150 250 200 214 C 250 178 300 150 372 70"
                fill="none"
                stroke="url(#gh-curve-grad)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Data points on the curve */}
              <g>
                <circle cx="128" cy="292" r="7.5" fill="var(--color-screen)" />
                <circle cx="128" cy="292" r="4.5" fill="var(--color-bg-base)" />
                <circle cx="200" cy="214" r="7.5" fill="var(--color-screen)" />
                <circle cx="200" cy="214" r="4.5" fill="var(--color-bg-base)" />
                <circle cx="300" cy="150" r="7.5" fill="var(--color-screen)" />
                <circle cx="300" cy="150" r="4.5" fill="var(--color-bg-base)" />
              </g>

              {/* Rocket at the top of the curve */}
              <g className="gh-rocket">
                <g transform="translate(374 64) rotate(35)">
                  {/* flame */}
                  <path d="M-6 14 C -5 26 0 34 0 34 C 0 34 5 26 6 14 Z" fill="var(--color-led-amber)" />
                  <path d="M-3 14 C -2 21 0 26 0 26 C 0 26 2 21 3 14 Z" fill="#ffffff" fillOpacity="0.85" />
                  {/* fins */}
                  <path d="M-8 3 L -18 16 L -8 12 Z" fill="var(--color-accent)" />
                  <path d="M8 3 L 18 16 L 8 12 Z" fill="var(--color-accent)" />
                  {/* body */}
                  <path d="M0 -30 C 10 -20 11 -2 8 12 L -8 12 C -11 -2 -10 -20 0 -30 Z" fill="var(--color-bg-base)" />
                  {/* window */}
                  <circle cx="0" cy="-8" r="5" fill="var(--color-screen)" />
                  <circle cx="0" cy="-8" r="5" fill="none" stroke="var(--color-accent)" strokeWidth="2" />
                </g>
              </g>

              {/* Automation / multi-tool node cluster */}
              <g className="gh-float">
                <g stroke="var(--color-console-muted)" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="3 4">
                  <line x1="70" y1="96" x2="120" y2="58" />
                  <line x1="120" y1="58" x2="158" y2="104" />
                  <line x1="70" y1="96" x2="158" y2="104" />
                </g>
                <circle cx="70" cy="96" r="7" fill="var(--color-led-green)" />
                <circle cx="70" cy="96" r="2.5" fill="var(--color-screen)" />
                <circle cx="120" cy="58" r="6" fill="var(--color-accent)" />
                <circle cx="120" cy="58" r="2.5" fill="var(--color-screen)" />
                <circle cx="158" cy="104" r="6" fill="var(--color-bg-base)" />
                <circle cx="158" cy="104" r="2.5" fill="var(--color-screen)" />
              </g>

              {/* Spark marks */}
              <g className="gh-float-slow" stroke="var(--color-led-amber)" strokeWidth="3" strokeLinecap="round">
                <line x1="326" y1="46" x2="338" y2="46" />
                <line x1="332" y1="40" x2="332" y2="52" />
              </g>
              <g stroke="var(--color-console-muted)" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.75">
                <line x1="92" y1="176" x2="102" y2="176" />
                <line x1="97" y1="171" x2="97" y2="181" />
              </g>
            </g>
          </svg>

          <span aria-hidden className="scanlines pointer-events-none absolute inset-0 opacity-50" />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(255,255,255,0.08),transparent_55%)]"
          />
        </div>
      </div>
    </div>
  )
}
