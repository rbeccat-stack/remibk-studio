import SectionTitle from '@/components/SectionTitle'
import Panel from '@/components/Panel'
import Reveal from '@/components/Reveal'
import OfferAxes from '@/components/OfferAxes'
import { offer } from '@/lib/content'

// Ce que je fais pour l'entreprise : un volet dépliable par ligne (promesse, livrables, outils, preuve).
export default function Offer() {
  return (
    <section id="offre" className="max-w-[1120px] mx-auto px-5 md:px-6 py-16 md:py-24 lg:py-32">
      <Reveal>
        <SectionTitle title={offer.title} underlineWord={offer.underlineWord} subtitle={offer.subtitle} />
      </Reveal>

      <Reveal>
        <Panel className="mt-10" lift={false}>
          <OfferAxes />
        </Panel>
      </Reveal>
    </section>
  )
}
