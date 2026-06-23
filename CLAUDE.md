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
- Custom colors (`bg-terracotta`, `text-sage`, etc.) map directly to `--color-*` CSS variables in `@theme`

### Fonts

Loaded via `next/font/google` in `src/app/layout.tsx` as CSS variables (`--font-fraunces`, `--font-manrope`), applied on `<html>`. Use `font-serif` and `font-sans` Tailwind utilities.

### Component rules

- All components are **Server Components** by default except `Header`, `FAQAccordion`, and `ContactForm` which are `'use client'` (burger menu state, accordion state, form state)
- Accent variants (`terracotta` / `sage` / `purple`) are typed as string literals — always use `as const` when defining them in `content.ts`

### Responsive breakpoints in use

- Mobile-first; `sm:` (640px) for stacked→row CTA buttons and 2-col process grid
- `md:` (768px) for main layout switches (2-col hero, 3-col features, 4-col process)
- `lg:` (1024px) for hero font size only

### Deployment

GitHub repo: `rbeccat-stack/remibk-studio` → auto-deployed on Vercel at `remibk-studio.vercel.app` on every push to `master`.

CV file must exist at `public/cv-remi-beccat.pdf` for the download buttons to work.
