import ProductCard from '@/components/ui/ProductCard/ProductCard'
import type { Product } from '@/types/Product'
import './ProductShowcase.scss'

type ProductShowcaseProps = {
  products: Product[]
  tabs?: readonly string[]
  onSetProduct: (product: Product | null) => void
}

export default function ProductShowcase({ products, tabs, onSetProduct }: ProductShowcaseProps) {
  return (
    <section className="product-showcase">
      <div className="product-showcase__header">
        <h2 className="product-showcase__title">Produtos relacionados</h2>

        {tabs ? (
          <ul className="product-showcase__tabs">
            {tabs.map((tab, index) => (
              <li
                key={tab}
                className={`product-showcase__tab-item ${index === 0 ? 'product-showcase__tab-item--active' : ''}`}
              >
                {tab}
              </li>
            ))}
          </ul>
        ) : (
          <a href="#" className="product-showcase__view-all">
            Ver todos
          </a>
        )}
      </div>

      <div className="product-showcase__grid">
        <button
          className="product-showcase__arrow product-showcase__arrow--prev"
          aria-label="Produto anterior"
        >
          {'<'}
        </button>

        <div className="product-showcase__product-list">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} onSetProduct={onSetProduct} />
          ))}
        </div>

        <button
          className="product-showcase__arrow product-showcase__arrow--next"
          aria-label="Próximo produto"
        >
          {'>'}
        </button>
      </div>
    </section>
  )
}
