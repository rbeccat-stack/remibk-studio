'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { agent } from '@/lib/content'

// Garde uniquement lettres, chiffres, tirets et underscores, 40 caractères max.
function cleanSource(value: string | null): string | null {
  if (!value) return null
  const cleaned = value.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40)
  return cleaned || null
}

// Widget ElevenLabs d'Imèr, affiché sur toutes les pages.
// La provenance (?src=… dans l'URL, ex. « manuscry » pour le QR code des lettres) est transmise
// à l'agent comme variable dynamique « source », puis conservée pour la navigation suivante.
export default function AgentWidget() {
  const pathname = usePathname()
  const [source, setSource] = useState<string>(agent.defaultSource)

  useEffect(() => {
    const fromUrl = cleanSource(new URLSearchParams(window.location.search).get('src'))
    let stored: string | null = null
    try {
      if (fromUrl) sessionStorage.setItem('imer_source', fromUrl)
      stored = cleanSource(sessionStorage.getItem('imer_source'))
    } catch {
      // Stockage indisponible (navigation privée stricte) : on garde la valeur de l'URL.
    }
    const resolved = fromUrl ?? stored ?? (pathname === '/agent' ? 'page_agent' : agent.defaultSource)
    // Lecture d'une valeur externe (URL, sessionStorage) après hydratation : setState volontaire.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSource(resolved)
  }, [pathname])

  return (
    <elevenlabs-convai
      agent-id={agent.agentId}
      dynamic-variables={JSON.stringify({ source })}
      default-expanded={pathname === '/agent' ? 'true' : 'false'}
    />
  )
}
