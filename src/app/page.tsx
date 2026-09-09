import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import RealisationCard from '@/components/RealisationCard'
import StackStrip from '@/components/StackStrip'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { realisations } from '@/lib/content'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <Hero />

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
