import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { mentionsLegales } from '@/lib/content'

export const metadata: Metadata = {
  title: mentionsLegales.metaTitle,
  description: mentionsLegales.metaDescription,
}

export default function Page() {
  return <LegalPage doc={mentionsLegales} />
}
