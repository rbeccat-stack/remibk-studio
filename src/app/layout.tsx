import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import './globals.css'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['700', '900'],
})

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  )
}
