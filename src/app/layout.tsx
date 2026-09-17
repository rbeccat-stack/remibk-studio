import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import AmbientBackground from '@/components/AmbientBackground'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Rémi BECCAT — Growth Marketer à Lyon · Scraping, automatisation, IA",
  description:
    "Rémi BECCAT, Growth Marketer à Lyon, disponible immédiatement en CDI ou freelance. Je construis des systèmes de scraping B2B, d'automatisation Make et d'agents IA utilisables par toute l'équipe.",
  openGraph: {
    title: "Rémi BECCAT — Growth Marketer à Lyon",
    description:
      "Systèmes de scraping B2B, automatisation et agents IA utilisables par toute l'équipe. 10 000 contacts qualifiés livrés, un agent IA en production 24/7. Disponible immédiatement.",
    type: "website",
    locale: "fr_FR",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full font-sans bg-bg-base text-fg">
        <AmbientBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
