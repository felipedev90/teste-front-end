import Logo from '@/assets/icons/Logo.svg'
import './Brands.scss'

const BRAND_COUNT = 5

export default function Brands() {
  return (
    <section className="brands">
      <div className="brands__container">
        <h2 className="brands__title">Navegue por marcas</h2>
        <div className="brands__list">
          {Array.from({ length: BRAND_COUNT }, (_, index) => (
            <div key={index} className="brands__item">
              <img
                src={Logo}
                alt={`Marca parceira ${index + 1}`}
                width={160}
                height={40}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
