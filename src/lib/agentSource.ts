import { agent } from '@/lib/content'

// Garde uniquement lettres, chiffres, tirets et underscores, 40 caractères max.
export function cleanSource(value: string | null): string | null {
  if (!value) return null
  const cleaned = value.toLowerCase().replace(/[^a-z0-9_-]/g, '').slice(0, 40)
  return cleaned || null
}

// Provenance de la visite, transmise à l'agent comme variable dynamique « source ».
// Ordre : ?src=… dans l'URL (ex. « manuscry » pour le QR code des lettres), puis la valeur
// gardée en session pour les pages suivantes, sinon une valeur par défaut selon la page.
// À appeler côté client uniquement.
export function resolveAgentSource(pathname: string): string {
  const fromUrl = cleanSource(new URLSearchParams(window.location.search).get('src'))
  let stored: string | null = null
  try {
    if (fromUrl) sessionStorage.setItem('agent_source', fromUrl)
    stored = cleanSource(sessionStorage.getItem('agent_source'))
  } catch {
    // Stockage indisponible (navigation privée stricte) : on garde la valeur de l'URL.
  }
  return fromUrl ?? stored ?? (pathname === '/agent' ? 'page_agent' : agent.defaultSource)
}
