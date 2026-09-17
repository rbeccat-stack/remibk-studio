'use client'

import { useState } from 'react'
import { faqs } from '@/lib/content'

function Answer({ lines }: { lines: string[] }) {
  // Regroupe les lignes "• " consécutives en une liste.
  const blocks: ({ type: 'p'; text: string } | { type: 'ul'; items: string[] })[] = []
  for (const line of lines) {
    if (line.startsWith('• ')) {
      const last = blocks[blocks.length - 1]
      if (last && last.type === 'ul') last.items.push(line.slice(2))
      else blocks.push({ type: 'ul', items: [line.slice(2)] })
    } else {
      blocks.push({ type: 'p', text: line })
    }
  }

  return (
    <div className="flex flex-col gap-3 text-sm text-fg-muted leading-relaxed md:text-base">
      {blocks.map((b, i) =>
        b.type === 'p' ? (
          <p key={i}>{b.text}</p>
        ) : (
          <ul key={i} className="flex flex-col gap-2 pl-5 list-disc marker:text-accent-2">
            {b.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )
      )}
    </div>
  )
}

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <div className="flex flex-col gap-3">
      {faqs.map((faq, i) => {
        const isOpen = open === i
        return (
          <div
            key={faq.q}
            className={`rounded-2xl border bg-card shadow-card transition duration-300 ease-expo ${
              isOpen ? 'border-border-accent shadow-card-hover' : 'border-border hover:border-border-hover'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              id={`faq-question-${i}`}
              className="group w-full flex items-center justify-between gap-4 px-5 py-4 md:px-6 text-left rounded-2xl"
            >
              <span className="font-semibold text-base md:text-lg tracking-tight text-fg leading-snug">
                {faq.q}
              </span>
              <span
                aria-hidden="true"
                className={`shrink-0 w-7 h-7 rounded-lg border flex items-center justify-center text-base leading-none transition-[background-color,color,border-color,box-shadow] duration-300 ease-expo ${
                  isOpen
                    ? 'bg-accent border-accent text-white shadow-cta'
                    : 'border-white/10 bg-surface text-fg-muted shadow-inset-highlight group-hover:text-fg group-hover:border-border-hover'
                }`}
              >
                <span className={`transition-transform duration-300 ease-expo ${isOpen ? 'rotate-45' : ''}`}>+</span>
              </span>
            </button>
            <div
              id={`faq-answer-${i}`}
              role="region"
              aria-labelledby={`faq-question-${i}`}
              hidden={!isOpen}
              className="px-5 pb-5 md:px-6 max-w-[70ch]"
            >
              <Answer lines={faq.a} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
