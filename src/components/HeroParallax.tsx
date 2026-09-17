'use client'

import { useEffect, useRef, type ReactNode } from 'react'

// Sur la première moitié de la hauteur d'écran scrollée : opacité 1 → 0,
// échelle 1 → 0.95, translation 0 → 100px. Respecte prefers-reduced-motion.
export default function HeroParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.5), 1)
      el.style.opacity = String(1 - progress)
      el.style.transform = `translateY(${progress * 100}px) scale(${1 - progress * 0.05})`
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={ref} className="will-change-[opacity,transform]">
      {children}
    </div>
  )
}
