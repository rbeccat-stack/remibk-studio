import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import SectionTitle from '@/components/SectionTitle'
import PillBadge from '@/components/PillBadge'
import FeatureCard from '@/components/FeatureCard'
import RealisationCard from '@/components/RealisationCard'
import ProcessCard from '@/components/ProcessCard'
import StackStrip from '@/components/StackStrip'
import FAQAccordion from '@/components/FAQAccordion'
import About from '@/components/About'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { features, realisations, process } from '@/lib/content'

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <Hero />

        {/* Bandeau défilant */}
        <Marquee />

        {/* Ce que j'apporte */}
        <section id="apports" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
          <SectionTitle
            title="Ce que j'apporte à une équipe growth"
            underlineWord="growth"
            subtitle="Un profil junior mais déjà opérationnel, capable de passer d'un besoin business à un système concret : données, automatisation, IA, dashboard ou workflow d'acquisition."
            accent="terracotta"
          />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
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
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {realisations.map((r) => (
                <RealisationCard key={r.title} {...r} />
              ))}
            </div>
          </div>
        </section>

        {/* Ma méthode de travail */}
        <section id="methode" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
          <div className="flex flex-col gap-3 mb-10">
            <PillBadge accent="terracotta">Comment je travaille</PillBadge>
            <SectionTitle
              title="Une approche test & learn, concrète et orientée exécution."
              underlineWord="exécution"
              subtitle="Je pars du besoin terrain, je structure les données, j'automatise ce qui peut l'être, puis je mesure ce qui fonctionne."
              accent="terracotta"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {process.map((step) => (
              <ProcessCard key={step.num} {...step} />
            ))}
          </div>
        </section>

        {/* Stack */}
        <div className="bg-bg-soft">
          <StackStrip />
        </div>

        {/* FAQ */}
        <section id="faq" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24">
          <div className="flex flex-col gap-3 mb-8">
            <PillBadge accent="sage">FAQ recruteur</PillBadge>
            <SectionTitle
              title="Les questions utiles avant un échange."
              underlineWord="utiles"
              accent="sage"
            />
          </div>
          <div className="max-w-2xl">
            <FAQAccordion />
          </div>
        </section>

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
