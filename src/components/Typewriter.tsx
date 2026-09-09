'use client'

import { useEffect, useState } from 'react'

type TypewriterProps = {
  words: string[]
  className?: string
}

export default function Typewriter({ words, className }: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
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
  }, [text, deleting, wordIndex, words])

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="typewriter-caret" aria-hidden>
        |
      </span>
    </span>
  )
}
