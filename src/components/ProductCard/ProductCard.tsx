import { formatPrice } from "../../utils/utils";
import { Product } from "../../types/Product";

export default function ProductCard({ product }: { product: Product }) {
  // Simulando um preço original para mostrar o desconto
  const originalPrice = product.price * 1.1;

  return (
    <div>
      <img src={product.photo} alt={product.productName} />
      <h2>{product.productName}</h2>
      <p>{formatPrice(originalPrice)}</p>
      <p>{formatPrice(product.price)}</p>
      <p>ou 2x de {formatPrice(product.price / 2)}</p>
      <span>Frete grátis</span>
      <button>Comprar</button>
    </div>
  );
}
