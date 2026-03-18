import "./HeroBanner.scss";
import hero from "../../assets/images/hero.webp";

export default function HeroBanner() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">Venha conhecer nossas promoções</h1>
          <p className="hero__subtitle">
            <span className="hero__highlight">50% Off</span> nos produtos
          </p>
          <button className="hero__button">Ver Produto</button>
        </div>
      </div>
    </section>
  );
}
