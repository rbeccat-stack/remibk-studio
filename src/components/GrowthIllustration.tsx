export default function GrowthIllustration() {
  return (
    <div className="w-full max-w-[460px] mx-auto md:ml-auto md:mr-0">
      <svg
        viewBox="0 0 440 400"
        role="img"
        aria-label="Illustration growth hacking : courbe de croissance, expérimentation A/B et automatisation multi-outils."
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Canvas */}
        <rect x="8" y="8" width="424" height="384" rx="28" fill="var(--color-card-light)" />

        {/* Subtle grid */}
        <g stroke="var(--color-border-dark)" strokeOpacity="0.06" strokeWidth="2" strokeLinecap="round" strokeDasharray="1 8">
          <line x1="100" y1="56" x2="100" y2="338" />
          <line x1="180" y1="56" x2="180" y2="338" />
          <line x1="260" y1="56" x2="260" y2="338" />
          <line x1="340" y1="56" x2="340" y2="338" />
          <line x1="44" y1="110" x2="404" y2="110" />
          <line x1="44" y1="180" x2="404" y2="180" />
          <line x1="44" y1="250" x2="404" y2="250" />
        </g>

        {/* Baseline */}
        <line x1="48" y1="330" x2="400" y2="330" stroke="var(--color-muted)" strokeOpacity="0.35" strokeWidth="2" />

        {/* Ascending bars — with a deliberate dip on #3 (test & learn) */}
        <g fill="var(--color-sage)">
          <rect x="78" y="262" width="36" height="68" rx="7" fillOpacity="0.30" />
          <rect x="128" y="214" width="36" height="116" rx="7" fillOpacity="0.42" />
          <rect x="178" y="238" width="36" height="92" rx="7" fillOpacity="0.36" />
          <rect x="228" y="176" width="36" height="154" rx="7" fillOpacity="0.55" />
          <rect x="278" y="120" width="36" height="210" rx="7" fillOpacity="0.78" />
        </g>

        {/* A/B experiment tag above the dip */}
        <g className="gh-float-slow">
          <rect x="176" y="204" width="40" height="22" rx="11" fill="var(--color-sage)" />
          <text
            x="196"
            y="219"
            textAnchor="middle"
            fontFamily="var(--font-sans)"
            fontSize="11"
            fontWeight="700"
            fill="#F2DFC2"
          >
            A/B
          </text>
        </g>

        {/* Growth curve */}
        <path
          className="gh-curve"
          d="M56 322 C 120 318 150 250 200 214 C 250 178 300 150 372 70"
          fill="none"
          stroke="var(--color-terracotta)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Data points on the curve */}
        <g>
          <circle cx="128" cy="292" r="7.5" fill="var(--color-card-light)" />
          <circle cx="128" cy="292" r="4.5" fill="var(--color-terracotta)" />
          <circle cx="200" cy="214" r="7.5" fill="var(--color-card-light)" />
          <circle cx="200" cy="214" r="4.5" fill="var(--color-terracotta)" />
          <circle cx="300" cy="150" r="7.5" fill="var(--color-card-light)" />
          <circle cx="300" cy="150" r="4.5" fill="var(--color-terracotta)" />
        </g>

        {/* Rocket at the top of the curve */}
        <g className="gh-rocket">
          <g transform="translate(374 64) rotate(35)">
            {/* flame */}
            <path d="M-6 14 C -5 26 0 34 0 34 C 0 34 5 26 6 14 Z" fill="var(--color-terracotta-dark)" />
            <path d="M-3 14 C -2 21 0 26 0 26 C 0 26 2 21 3 14 Z" fill="var(--color-purple-soft)" />
            {/* fins */}
            <path d="M-8 3 L -18 16 L -8 12 Z" fill="var(--color-terracotta-dark)" />
            <path d="M8 3 L 18 16 L 8 12 Z" fill="var(--color-terracotta-dark)" />
            {/* body */}
            <path d="M0 -30 C 10 -20 11 -2 8 12 L -8 12 C -11 -2 -10 -20 0 -30 Z" fill="var(--color-terracotta)" />
            {/* window */}
            <circle cx="0" cy="-8" r="5" fill="var(--color-bg-soft)" />
            <circle cx="0" cy="-8" r="5" fill="none" stroke="var(--color-terracotta-dark)" strokeWidth="2" />
          </g>
        </g>

        {/* Automation / multi-tool node cluster */}
        <g className="gh-float">
          <g stroke="var(--color-purple-soft)" strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="3 4">
            <line x1="70" y1="96" x2="120" y2="58" />
            <line x1="120" y1="58" x2="158" y2="104" />
            <line x1="70" y1="96" x2="158" y2="104" />
          </g>
          <circle cx="70" cy="96" r="7" fill="var(--color-purple-soft)" />
          <circle cx="70" cy="96" r="2.5" fill="#F2DFC2" />
          <circle cx="120" cy="58" r="6" fill="var(--color-sage)" />
          <circle cx="120" cy="58" r="2.5" fill="#F2DFC2" />
          <circle cx="158" cy="104" r="6" fill="var(--color-terracotta)" />
          <circle cx="158" cy="104" r="2.5" fill="#F2DFC2" />
        </g>

        {/* Spark marks */}
        <g className="gh-float-slow" stroke="var(--color-purple-soft)" strokeWidth="3" strokeLinecap="round">
          <line x1="332" y1="40" x2="344" y2="40" />
          <line x1="338" y1="34" x2="338" y2="46" />
        </g>
        <g stroke="var(--color-terracotta)" strokeWidth="2.5" strokeLinecap="round">
          <line x1="92" y1="176" x2="102" y2="176" />
          <line x1="97" y1="171" x2="97" y2="181" />
        </g>

        {/* Floating accent dot */}
        <circle className="gh-float" cx="360" cy="300" r="4" fill="var(--color-terracotta)" fillOpacity="0.4" />
      </svg>
    </div>
  )
}
