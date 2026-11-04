import type { Metadata } from 'next'
import LegalPage from '@/components/LegalPage'
import { confidentialite } from '@/lib/content'

export const metadata: Metadata = {
  title: confidentialite.metaTitle,
  description: confidentialite.metaDescription,
}

export default function Page() {
  return <LegalPage doc={confidentialite} />
}
