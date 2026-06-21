'use client'

import { useState } from 'react'
import { faqs } from '@/lib/content'

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <div className="flex flex-col divide-y divide-border-dark/10">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => toggle(i)}
            aria-expanded={open === i}
            aria-controls={`faq-answer-${i}`}
            id={`faq-question-${i}`}
            className="w-full flex items-center justify-between gap-4 py-4 text-left font-sans font-semibold text-sm text-text-main hover:text-terracotta transition-colors"
          >
            <span>{faq.q}</span>
            <span
              className="shrink-0 w-6 h-6 rounded-full border border-border-dark/20 flex items-center justify-center text-muted transition-transform"
              style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }}
              aria-hidden
            >
              +
            </span>
          </button>
          <div
            id={`faq-answer-${i}`}
            role="region"
            aria-labelledby={`faq-question-${i}`}
            hidden={open !== i}
          >
            <p className="pb-4 text-sm font-sans text-muted leading-relaxed">
              {faq.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
