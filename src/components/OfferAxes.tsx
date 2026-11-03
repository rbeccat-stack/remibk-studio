'use client'

import { useId, useState } from 'react'
import Image from 'next/image'
import { offer } from '@/lib/content'

// Accordéon des volets : un seul ouvert à la fois, le premier d'office.
// La hauteur s'anime via grid-template-rows (0fr → 1fr), sans mesurer le contenu.
export default function OfferAxes() {
  const [open, setOpen] = useState(0)
  const baseId = useId()

  return (
    <ol className="divide-y divide-border">
      {offer.axes.map((axis, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-${i}`
        const { href, label } = axis.proof

        return (
          <li key={axis.label}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="grid w-full cursor-pointer grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 p-6 text-left transition-colors duration-200 ease-quart hover:bg-surface/30 md:grid-cols-[180px_1fr_auto] md:gap-x-8 md:px-8"
              >
                <span className="flex items-baseline gap-3 md:flex-col md:gap-1">
                  <span className="font-mono text-xs text-accent-ink">0{i + 1}</span>
                  <span className="text-fg font-medium text-xl tracking-[-0.018em]">{axis.label}</span>
                </span>
                <span className="col-span-2 row-start-2 text-fg-secondary text-[15px] leading-relaxed md:col-span-1 md:col-start-2 md:row-start-1 md:text-base">{axis.promise}</span>
                <span
                  aria-hidden
                  className={`col-start-2 row-start-1 grid h-8 w-8 place-items-center rounded-full border border-border text-fg-muted transition-transform duration-300 ease-quart md:col-start-3 ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-hidden={!isOpen}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-expo ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-6 px-6 pb-6 md:grid-cols-[180px_1fr] md:gap-8 md:px-8 md:pb-8 lg:grid-cols-[180px_1fr_240px]">
                  <div className="md:col-start-2">
                    <ul className="space-y-2">
                      {axis.deliverables.map((item) => (
                        <li key={item} className="flex gap-3 text-fg-muted text-sm leading-relaxed">
                          <span aria-hidden className="dot dot-off mt-[7px] h-1.5 w-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {axis.tools && (
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`Outils ${axis.label}`}>
                        {axis.tools.map((tool) => (
                          <li
                            key={tool.name}
                            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 py-1 pl-1.5 pr-3 text-xs text-fg-secondary"
                          >
                            {/* Logos minuscules : chargés tout de suite, servis tels quels (pas d'optimiseur). */}
                            <Image
                              src={tool.logo}
                              alt=""
                              width={16}
                              height={16}
                              loading="eager"
                              unoptimized
                              className="h-4 w-4 object-contain"
                            />
                            {tool.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="md:col-start-2 lg:col-start-auto">
                    <p className="font-mono text-[11px] text-fg-muted">Déjà livré</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-1 inline-block text-sm text-fg-secondary underline decoration-border-strong underline-offset-4 transition-colors duration-200 ease-quart hover:text-fg hover:decoration-fg-muted"
                      >
                        {label} →
                      </a>
                    ) : (
                      <p className="mt-1 text-sm text-fg-secondary">{label}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
