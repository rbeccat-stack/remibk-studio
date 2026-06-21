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
  title: "Rémi BECCAT — Growth Engineer Junior à Lyon",
  description:
    "Rémi BECCAT recherche un CDI Growth Engineer Junior à Lyon à partir de septembre 2026. Profil automatisation, IA, scraping B2B, data, dashboards et marketing operations.",
  openGraph: {
    title: "Rémi BECCAT — Growth Engineer Junior",
    description:
      "Growth Engineer Junior basé à Lyon, spécialisé en automatisation, IA opérationnelle, scraping B2B, data, dashboards et acquisition. Disponible à partir de septembre 2026 pour un CDI.",
    type: "website",
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
