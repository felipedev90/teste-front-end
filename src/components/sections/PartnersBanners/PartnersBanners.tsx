import PartnerCard from '../PartnerCard/PartnerCard'
import { PARTNERS } from '@/data/partners'
import './PartnersBanners.scss'

export default function PartnersBanners() {
  return (
    <section className="partners">
      <div className="partners__container">
        {PARTNERS.map((partner) => (
          <PartnerCard
            key={partner.id}
            title={partner.title}
            description={partner.description}
            image={partner.image}
            buttonText="CONFIRA"
          />
        ))}
      </div>
    </section>
  )
}
