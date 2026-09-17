'use client'

import type { MouseEvent, ReactNode } from 'react'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  as?: 'div' | 'article'
  /** Désactive la translation au survol (cartes avec contenu interactif dedans). */
  lift?: boolean
}

function trackSpotlight(e: MouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
}

// Carte verre : dégradé translucide, liseré 1px en haut, ombre multi-couches
// et spotlight radial qui suit le curseur.
export default function SpotlightCard({
  children,
  className = '',
  as: Tag = 'div',
  lift = true,
}: SpotlightCardProps) {
  return (
    <Tag
      onMouseMove={trackSpotlight}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition duration-300 ease-expo hover:border-border-hover hover:shadow-card-hover ${
        lift ? 'hover:-translate-y-1' : ''
      } ${className}`}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <span className="pointer-events-none absolute inset-0 bg-spotlight opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative flex h-full flex-col">{children}</div>
    </Tag>
  )
}
