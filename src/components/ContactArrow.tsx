'use client'

import { useEffect, useRef, useState } from 'react'

// Flèche « dessinée à la main » du texte surligné ([data-arrow-from]) vers le canal survolé
// ([data-arrow-to] : téléphone, WhatsApp). Elle n'existe qu'au survol, se trace en ~700 ms et
// s'efface en fondu. Desktop uniquement (colonnes côte à côte + souris).
const QUERY = '(min-width: 768px) and (hover: hover)'

interface Geometry {
  d: string
  head: string
  key: number
}

export default function ContactArrow() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [geo, setGeo] = useState<Geometry | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const container = svgRef.current?.parentElement
    const from = container?.querySelector<HTMLElement>('[data-arrow-from]')
    const targets = Array.from(container?.querySelectorAll<HTMLElement>('[data-arrow-to]') ?? [])
    if (!container || !from || targets.length === 0) return
    const mq = window.matchMedia(QUERY)
    let n = 0

    const show = (target: HTMLElement) => {
      if (!mq.matches) return
      const box = container.getBoundingClientRect()
      // Dernière ligne du surlignage s'il passe sur deux lignes.
      const rects = from.getClientRects()
      const a = rects[rects.length - 1] ?? from.getBoundingClientRect()
      const b = target.getBoundingClientRect()
      const sx = a.right - box.left + 10
      const sy = a.top + a.height / 2 - box.top
      const ex = b.left - box.left - 12
      const ey = b.top + b.height / 2 - box.top
      const dx = ex - sx
      // Arc léger qui monte puis redescend, arrivée à l'horizontale sur la carte.
      const d = `M${sx} ${sy}C${sx + dx * 0.45} ${sy - 30} ${ex - dx * 0.4} ${ey} ${ex} ${ey}`
      // Pointe ouverte, légèrement asymétrique pour garder le côté tracé main.
      const head = `M${ex - 9} ${ey - 7}L${ex} ${ey}L${ex - 10} ${ey + 6}`
      setGeo({ d, head, key: ++n })
      setVisible(true)
    }
    const hide = () => setVisible(false)

    const cleanups = [from, ...targets].map((el) => {
      const target = el === from ? targets[0] : el
      const enter = () => show(target)
      el.addEventListener('pointerenter', enter)
      el.addEventListener('pointerleave', hide)
      return () => {
        el.removeEventListener('pointerenter', enter)
        el.removeEventListener('pointerleave', hide)
      }
    })
    return () => cleanups.forEach((c) => c())
  }, [])

  return (
    <svg
      ref={svgRef}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`pointer-events-none absolute inset-0 z-10 h-full w-full overflow-visible text-accent-ink transition-opacity duration-300 ease-quart ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {geo && (
        <g key={geo.key}>
          <path d={geo.d} pathLength={1} strokeDasharray="1" className="animate-arrow-draw" />
          <path
            d={geo.head}
            pathLength={1}
            strokeDasharray="1"
            className="animate-arrow-draw [animation-delay:450ms]"
          />
        </g>
      )}
    </svg>
  )
}
