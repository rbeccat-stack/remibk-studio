'use client'

import { useEffect, useState } from 'react'

type WordCycleProps = {
  words: string[]
  className?: string
  /** Temps d'affichage d'un mot, en ms. */
  interval?: number
  /** Suffixe collé à chaque mot (ex. un point final). */
  suffix?: string
  /** Index imposé par le parent (mode contrôlé) : le minuteur interne est alors coupé. */
  index?: number
}

// Tous les mots sont empilés dans une même cellule de grille : le bloc garde
// la largeur du mot le plus long, rien ne bouge autour, et le mot courant
// reste affiché jusqu'à ce que le suivant le remplace.
export default function WordCycle({ words, className, interval = 2400, suffix = '', index: controlled }: WordCycleProps) {
  const [reduced, setReduced] = useState(false)
  const [internal, setIndex] = useState(0)
  const index = controlled ?? internal

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (controlled !== undefined || reduced || words.length < 2) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(timer)
  }, [controlled, reduced, words.length, interval])

  if (reduced) {
    return (
      <span className={className}>
        {words.join(', ')}
        {suffix}
      </span>
    )
  }

  return (
    <span className={`inline-grid ${className ?? ''}`}>
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden="true"
          className={`[grid-area:1/1] whitespace-nowrap ${i === index ? 'word-cycle-in' : 'invisible'}`}
        >
          {word}
          {suffix}
        </span>
      ))}
      <span className="sr-only">
        {words.join(', ')}
        {suffix}
      </span>
    </span>
  )
}
