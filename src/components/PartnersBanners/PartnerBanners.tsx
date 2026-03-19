import parceiros from "../../assets/images/parceiros.webp";
import PartnerCard from "../PartnerCard/PartnerCard";

interface PartnerArray {
  id: number;
  title: string;
  description: string;
  image: string;
}

export default function PartnersBanners() {
  const partnersData: PartnerArray[] = [
    {
      id: 1,
      title: "Parceiros",
      description: "Seja nosso parceiro e aproveite os benefícios exclusivos.",
      image: parceiros,
    },
    {
      id: 2,
      title: "Parceiros",
      description: "Seja nosso parceiro e aproveite os benefícios exclusivos.",
      image: parceiros,
    },
  ];

  return (
    <section className="partners">
      <div className="partners__container">
        {partnersData.map((partner) => (
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
  );
}
