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

**Content is fully centralized in `src/lib/content.ts`.** Every text string, link, stat, and CTA lives there. Modify content there first; touch components only if structure needs to change.

### Tailwind v4 specifics

- No `tailwind.config.js` — custom tokens are defined in `src/app/globals.css` inside an `@theme {}` block
- Import syntax: `@import "tailwindcss"` (not the old `@tailwind base/components/utilities`)
- Custom colors (`bg-bg-base`, `bg-panel`, `bg-surface`, `text-fg-muted`, `bg-accent`, etc.) map directly to `--color-*` CSS variables in `@theme`; shadows (`shadow-card`, `shadow-floating`) to `--shadow-*`; easings `ease-quart` / `ease-expo` to `--ease-*`. `font-medium` is overridden to 510 and `font-semibold` to 590 (Inter Variable)
- Composite utilities are declared with `@utility` in `globals.css`: `key-primary` / `key-chassis` (button skins — shape set in markup: `rounded-full` + padding), `dot` + `dot-accent|green|amber|off` (status dots)

### Design system: Linear-like dark UI

Near-black flat surfaces (`bg-base #08090a` → `panel #0f1011` → `surface #1c1c1f`), 1px borders (`border #23252a`, `border-strong #34343a`), hierarchy carried by text greys (`fg #f7f8f8`, `fg-secondary #d0d6e0`, `fg-muted #8a8f98`, `fg-subtle #62666d` decorative only). One indigo accent used sparingly: `accent #5e6ad2` for button fills (white text 4.7:1), `accent-ink #7170ff` for indigo **text** and dots — never `accent` for text. No bounce: `ease-quart` for hovers, `ease-expo` for reveals. Key primitives:

- `AmbientBackground` — fixed near-black background with a diffuse indigo glow at the top
- `Panel` — flat card (`bg-panel`, 1px border, top inner highlight); props `lift` (border brightens on hover), `elevated`, `dot`. Use it for any card surface
- Buttons are pills: `key-primary` (indigo) / `key-chassis` (smoked glass + hairline), weight 510, normal case
- `Reveal` — one-shot fade-up on scroll (IntersectionObserver, 15 % threshold), `delay` prop for stagger
- `HeroParallax` — hero fades/scales/translates over the first 50 vh of scroll
- `HeroWindow` — dark app window (title bar, skeleton sidebar) that broadcasts `hero.lead` + the `WordCycle` keywords; text sizes use container units (`cqw`)

### Fonts

Loaded via `next/font/google` in `src/app/layout.tsx` as CSS variables (`--font-inter`, `--font-jetbrains-mono`), applied on `<html>`. Use `font-sans` (Inter) for everything, `font-mono` (JetBrains Mono) for labels, tags, step numbers and metadata (regular weight, normal case, `text-xs`/`text-[11px]`, `text-fg-muted`). Headings: `font-medium` with tight tracking (`tracking-[-0.022em]`). Inter stylistic sets `cv01`/`ss03` are enabled on `body`.

### Component rules

- All components are **Server Components** by default except `Header`, `BulletDetail`, `RealisationCard`, `WordCycle`, `Reveal` and `HeroParallax` which are `'use client'`
- Accent variants (`terracotta` / `sage` / `purple`) are typed as string literals — always use `as const` when defining them in `content.ts`. The keys are historical: they now map to dot colors indigo / green / amber, and text ink `accent-ink` / `fg-secondary`.

### Responsive breakpoints in use

- Mobile-first; `sm:` (640px) for stacked→row CTA buttons, 2-col features and 2-col process grid
- `md:` (768px) for main layout switches (2-col hero, 4-col process)
- `lg:` (1024px) for hero font size, 4-col features and 4-col toolbox

### Deployment

GitHub repo: `rbeccat-stack/remibk-studio` → auto-deployed on Vercel at `remibk-studio.vercel.app` on every push to `master`.

CV file must exist at `public/cv-remi-beccat.pdf` for the download buttons to work.
