import { formatPrice } from '@/utils/utils'
import type { Product } from '@/types/Product'
import './ProductCard.scss'

type ProductCardProps = {
  product: Product
  onSetProduct: (product: Product | null) => void
}

export default function ProductCard({ product, onSetProduct }: ProductCardProps) {
  // Simula um preço original para mostrar o desconto
  const originalPrice = product.price * 1.1

  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img
          src={product.photo}
          alt={product.productName}
          width={278}
          height={228}
          loading="lazy"
          className="product-card__image"
        />
      </div>

      <h3 className="product-card__title">{product.productName}</h3>

      <div className="product-card__price-group">
        <p className="product-card__price-old">{formatPrice(originalPrice)}</p>
        <p className="product-card__price-current">{formatPrice(product.price)}</p>
        <p className="product-card__installments">
          ou 2x de {formatPrice(product.price / 2)} sem juros
        </p>
      </div>

      <span className="product-card__shipping">Frete grátis</span>

      <button className="product-card__button" onClick={() => onSetProduct(product)}>
        COMPRAR
      </button>
    </div>
  )
}
