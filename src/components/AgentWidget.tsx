'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { agent } from '@/lib/content'
import { resolveAgentSource } from '@/lib/agentSource'

// Widget flottant ElevenLabs de l'agent vocal, affiché sur toutes les pages sauf /agent,
// qui a sa propre console d'appel intégrée (AgentConsole).
// La provenance (?src=…) est transmise à l'agent comme variable dynamique « source ».
export default function AgentWidget() {
  const pathname = usePathname()
  const [source, setSource] = useState<string>(agent.defaultSource)

  useEffect(() => {
    // Lecture d'une valeur externe (URL, sessionStorage) après hydratation : setState volontaire.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSource(resolveAgentSource(pathname))
  }, [pathname])

  if (pathname === '/agent') return null

  return (
    <elevenlabs-convai
      agent-id={agent.agentId}
      dynamic-variables={JSON.stringify({ source })}
      default-expanded="false"
    />
  )
}
