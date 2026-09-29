# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important: Next.js version warning

@AGENTS.md

This project uses **Next.js 16** with **Tailwind CSS v4** — both have breaking changes from their previous major versions. Read `node_modules/next/dist/docs/` before touching framework-level code.

## Commands

```bash
npm run dev      # dev server (auto-selects port if 3000 is busy)
npm run build    # production build — must pass before any PR/push
npm run lint     # ESLint
```

Always run `npm run build` after any change. TypeScript errors surface here, not at dev time.

## Architecture

One-page portfolio site (CDI job application for Rémi BECCAT — Growth Engineer Junior, Lyon).

**Content is fully centralized in `src/lib/content.ts`.** Every text string, link, stat, FAQ entry, and CTA lives there. Modify content there first; touch components only if structure needs to change.

### Tailwind v4 specifics

- No `tailwind.config.js` — custom tokens are defined in `src/app/globals.css` inside an `@theme {}` block
- Import syntax: `@import "tailwindcss"` (not the old `@tailwind base/components/utilities`)
- Custom colors (`bg-bg-base`, `text-fg-muted`, `bg-accent`, etc.) map directly to `--color-*` CSS variables in `@theme`; shadows (`shadow-card`, `shadow-floating`, `shadow-key`, `shadow-pressed(-sm)`, `shadow-recessed(-sm)`) to `--shadow-*`; `text-shadow-emboss` to `--text-shadow-emboss`
- Composite utilities are declared with `@utility` in `globals.css`: `key-primary` / `key-chassis` (button skins), `led` + `led-red|green|amber|off`, `screws`, `bg-noise`, `bg-carbon`, `scanlines`, `bg-blueprint`

### Design system: Industrial Skeuomorphism

Light matte-plastic chassis (`#e0e5ec`), single light source top-left (highlights top/left, shadows bottom/right), neumorphic dual shadows, one safety-red accent (`#ff4757`) reserved for interactive elements and LEDs. Red **text** uses `accent-ink` (`#c0262d`, 4.6:1 on the chassis) — never `accent`. Spring easing (`ease-spring`) for hover/press, `ease-expo` for scroll reveals. Key primitives:

- `AmbientBackground` — fixed chassis background: top-left light hotspot + desaturated noise in overlay
- `Panel` — module bolted on the chassis (neumorphic shadow, corner screws); props `lift`, `elevated`, `vents`, `led`. Use it for any card surface
- Buttons are physical keys: `key-primary` (red) / `key-chassis` (grey) — uppercase, press down 2px with inverted shadow on `:active`
- `Reveal` — one-shot fade-up on scroll (IntersectionObserver, 15 % threshold), `delay` prop for stagger
- `HeroParallax` — hero fades/scales/translates over the first 50 vh of scroll
- `HeroTV` — hero TV set (chassis body, recessed CRT screen) that broadcasts `hero.lead` + the `WordCycle` keywords; screen text sizes use container units (`cqw`)
- The only dark surfaces are the TV screen frame and the footer (`bg-console`)

### Fonts

Loaded via `next/font/google` in `src/app/layout.tsx` as CSS variables (`--font-inter`, `--font-jetbrains-mono`), applied on `<html>`. Use `font-sans` (Inter) for everything, `font-mono` (JetBrains Mono) for labels, tags, step numbers and metadata (bold, uppercase, `tracking-[0.08em]`).

### Component rules

- All components are **Server Components** by default except `Header`, `FAQAccordion`, `RealisationCard`, `WordCycle`, `Reveal` and `HeroParallax` which are `'use client'`
- Accent variants (`terracotta` / `sage` / `purple`) are typed as string literals — always use `as const` when defining them in `content.ts`. The keys are historical: they now map to LED colors red / green / amber, and text ink `accent-ink` / `slate`.

### Responsive breakpoints in use

- Mobile-first; `sm:` (640px) for stacked→row CTA buttons, 2-col features and 2-col process grid
- `md:` (768px) for main layout switches (2-col hero, 4-col process)
- `lg:` (1024px) for hero font size, 4-col features and 4-col toolbox

### Deployment

GitHub repo: `rbeccat-stack/remibk-studio` → auto-deployed on Vercel at `remibk-studio.vercel.app` on every push to `master`.

CV file must exist at `public/cv-remi-beccat.pdf` for the download buttons to work.
