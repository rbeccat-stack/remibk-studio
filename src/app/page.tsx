import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import FeatureCard from '@/components/FeatureCard'
import ProcessCard from '@/components/ProcessCard'
import RealisationCard from '@/components/RealisationCard'
import StackStrip from '@/components/StackStrip'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { realisations, features, process } from '@/lib/content'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <Hero />

        {/* Apports */}
        <section id="apports">
          <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
            <SectionTitle
              title="Ce que j'apporte"
              underlineWord="j'apporte"
              subtitle="Trois terrains où je livre vite, sans dépendre de quelqu'un d'autre pour avancer."
              accent="terracotta"
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map((f) => (
                <FeatureCard key={f.title} {...f} />
              ))}
            </div>
          </div>
        </section>

        {/* Réalisations */}
        <section id="realisations" className="bg-bg-soft">
          <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
            <SectionTitle
              title="Réalisations concrètes"
              underlineWord="concrètes"
              subtitle="Des systèmes livrés et utilisés — workflows, interfaces, agents, dashboards."
              accent="sage"
            />
            <div className="mt-10 flex flex-col gap-5">
              {realisations.map((r) => (
                <RealisationCard key={r.title} {...r} />
              ))}
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section id="methode">
          <div className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
            <SectionTitle
              title="Comment je travaille"
              underlineWord="travaille"
              subtitle="Le même déroulé à chaque mission, du besoin flou au système qui tourne sans moi."
              accent="sage"
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              {process.map((p) => (
                <ProcessCard key={p.num} {...p} />
              ))}
            </div>
          </div>
        </section>

        {/* Stack */}
        <div className="bg-bg-soft">
          <StackStrip />
        </div>

        {/* À propos */}
        <div className="bg-bg-soft">
          <About />
        </div>

        {/* Contact */}
        <ContactForm />
      </main>

      <Footer />
    </>
  )
}
