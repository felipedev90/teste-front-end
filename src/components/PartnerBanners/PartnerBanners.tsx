import parceiros from "../../assets/images/parceiros.webp";

export default function PartnerBanners() {
  return (
    <section className="partners">
      <div className="partners__container">
        <div
          className="partners__card"
          style={{ backgroundImage: `url(${parceiros})` }}
        >
          <div className="partners__content">
            <h2 className="partners__title">Parceiros</h2>
            <p className="partners__description">
              Seja nosso parceiro e aproveite os benefícios exclusivos.
            </p>
            <button className="partners__button">Confira</button>
          </div>
        </div>
      </div>
    </section>
  );
}
