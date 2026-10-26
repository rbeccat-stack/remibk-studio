import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import FeatureCard from '@/components/FeatureCard'
import RealisationCard from '@/components/RealisationCard'
import Toolbox from '@/components/Toolbox'
import About from '@/components/About'
import FAQAccordion from '@/components/FAQAccordion'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { realisations, features, faqSection } from '@/lib/content'

// Séparateur de section : rainure usinée (trait d'ombre + liseré de lumière).
function Divider() {
  return (
    <div aria-hidden className="relative border-t border-border">
      <span className="absolute inset-x-0 top-0 h-px bg-white" />
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <Hero />

        <Divider />

        {/* Réalisations */}
        <section id="realisations">
          <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
            <Reveal>
              <SectionTitle
                title="Réalisations concrètes"
                underlineWord="concrètes"
                subtitle="Des systèmes livrés et utilisés — workflows, interfaces, agents, dashboards."
                accent="sage"
              />
            </Reveal>
            <div className="mt-10 flex flex-col gap-5">
              {realisations.map((r, i) => (
                <Reveal key={r.title} delay={Math.min(i, 3) * 80}>
                  <RealisationCard {...r} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Apports */}
        <section id="apports">
          <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
            <Reveal>
              <SectionTitle
                title="Ce que j'apporte, en 4 axes"
                underlineWord="j'apporte"
                subtitle="Quatre terrains où je livre vite, sans dépendre de quelqu'un d'autre pour avancer."
                accent="terracotta"
              />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 80} className="h-full">
                  <FeatureCard {...f} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* Outils */}
        <Toolbox />

        <Divider />

        {/* À propos */}
        <About />

        <Divider />

        {/* FAQ */}
        <section id="faq">
          <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
            <Reveal>
              <SectionTitle
                title={faqSection.title}
                underlineWord={faqSection.underlineWord}
                subtitle={faqSection.subtitle}
                accent="terracotta"
              />
            </Reveal>
            <Reveal delay={80} className="mt-10 max-w-3xl">
              <FAQAccordion />
            </Reveal>
          </div>
        </section>

        <Divider />

        {/* Contact */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
