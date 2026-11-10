import type { DetailedHTMLProps, HTMLAttributes } from 'react'

// Élément personnalisé du widget ElevenLabs (chargé par le script convai-widget-embed).
declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'agent-id': string
        'dynamic-variables'?: string
        'default-expanded'?: 'true' | 'false'
        variant?: 'tiny' | 'compact' | 'full' | 'expandable'
      }
    }
  }
}
