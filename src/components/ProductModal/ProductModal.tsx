import { useState } from "react";
import { formatPrice } from "../../utils/utils";
import { Product } from "../../types/Product";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [productQty, setProductQty] = useState(1);

  return (
    <dialog open>
      <button onClick={() => onClose()}>X</button>
      <h2>{product.productName}</h2>
      <img src={product.photo} alt={product.productName} />
      <p>{formatPrice(product.price)}</p>
      <p>{product.descriptionShort}</p>
      <span>{`Veja mais detalhes do produto >`}</span>
      <button
        onClick={() => setProductQty(productQty > 1 ? productQty - 1 : 1)}
      >
        -
      </button>
      {productQty}
      <button onClick={() => setProductQty(productQty + 1)}>+</button>
      <button>Comprar</button>
    </dialog>
  );
}
