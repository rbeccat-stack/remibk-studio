'use client'

import { useEffect, useState } from 'react'

type WordCycleProps = {
  words: string[]
  className?: string
  /** Temps d'affichage d'un mot, en ms. */
  interval?: number
}

// Le mot courant reste affiché jusqu'à ce que le suivant le remplace :
// la ligne n'est jamais vide, contrairement à un effet machine à écrire.
export default function WordCycle({ words, className, interval = 2400 }: WordCycleProps) {
  const [reduced, setReduced] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduced || words.length < 2) return
    const timer = setInterval(() => setIndex((i) => (i + 1) % words.length), interval)
    return () => clearInterval(timer)
  }, [reduced, words.length, interval])

  if (reduced) {
    return <span className={className}>{words.join(' · ')}</span>
  }

  return (
    <span className={className}>
      <span key={index} aria-hidden="true" className="word-cycle-in inline-block">
        {words[index]}
      </span>
      <span className="sr-only">{words.join(', ')}</span>
    </span>
  )
}
