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
- Custom colors (`bg-bg-base`, `text-fg-muted`, `bg-accent`, etc.) map directly to `--color-*` CSS variables in `@theme`
- Composite utilities (`bg-card`, `text-gradient-fg`, `text-gradient-accent`, `bg-spotlight`, `btn-shine`…) are declared with `@utility` in `globals.css`

### Design system: Linear / Modern

Dark near-black canvas (`#050506`), single indigo accent (`#5E6AD2`), glass cards, multi-layer shadows, expo-out easing (200–300 ms), tiny hover movements (≤ 8 px). Key primitives:

- `AmbientBackground` — fixed 4-layer background (gradient, noise, floating radial-gradient blobs, 64px grid). Blobs are radial-gradients on purpose, **not** `filter: blur()` (perf).
- `SpotlightCard` — glass card with mouse-tracking glow; use it for any card surface
- `Reveal` — one-shot fade-up on scroll (IntersectionObserver, 15 % threshold), `delay` prop for stagger
- `HeroParallax` — hero fades/scales/translates over the first 50 vh of scroll

Gradient text is intentional (design-system requirement); the impeccable hook ignore for `gradient-text` in `.impeccable/config.json` documents that.

### Fonts

Loaded via `next/font/google` in `src/app/layout.tsx` as CSS variables (`--font-inter`, `--font-geist-mono`), applied on `<html>`. Use `font-sans` (Inter) for everything, `font-mono` (Geist Mono) for labels, tags, step numbers and metadata.

### Component rules

- All components are **Server Components** by default except `Header`, `FAQAccordion`, `RealisationCard`, `WordCycle`, `SpotlightCard`, `Reveal` and `HeroParallax` which are `'use client'`
- Accent variants (`terracotta` / `sage` / `purple`) are typed as string literals — always use `as const` when defining them in `content.ts`. The keys are historical: they now map to `accent` (indigo) / `accent-2` (light indigo) / `accent-3` (violet) inside each component.

### Responsive breakpoints in use

- Mobile-first; `sm:` (640px) for stacked→row CTA buttons, 2-col features and 2-col process grid
- `md:` (768px) for main layout switches (2-col hero, 4-col process)
- `lg:` (1024px) for hero font size, 4-col features and 4-col toolbox

### Deployment

GitHub repo: `rbeccat-stack/remibk-studio` → auto-deployed on Vercel at `remibk-studio.vercel.app` on every push to `master`.

CV file must exist at `public/cv-remi-beccat.pdf` for the download buttons to work.
