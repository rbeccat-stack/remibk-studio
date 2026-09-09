'use client'

import { useEffect, useState } from 'react'

type TypewriterProps = {
  words: string[]
  className?: string
}

export default function Typewriter({ words, className }: TypewriterProps) {
  const [reduced, setReduced] = useState(false)
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState(words[0] ?? '')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const onChange = () => setReduced(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduced) return
    const current = words[wordIndex]

    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), 1600)
      return () => clearTimeout(pause)
    }

    if (deleting && text === '') {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setText((prev) =>
          deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
        )
      },
      deleting ? 55 : 110
    )

    return () => clearTimeout(timeout)
  }, [text, deleting, wordIndex, words, reduced])

  if (reduced) {
    return <span className={className}>{words.join(' · ')}</span>
  }

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text}
        <span className="typewriter-caret" />
      </span>
      <span className="sr-only">{words.join(', ')}</span>
    </span>
  )
}
