import './HeroBanner.scss'
import hero from '@/assets/images/hero.webp'

export default function HeroBanner() {
  return (
    <section className="hero">
      <img
        className="hero__image"
        src={hero}
        alt="Promoções de tecnologia com 50% de desconto"
        width={1280}
        height={390}
        fetchPriority="high"
      />

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
  )
}
