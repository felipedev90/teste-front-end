import { useState } from "react";
import { formatPrice } from "../../utils/utils";
import { Product } from "../../types/Product";
import "./ProductModal.scss";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [productQty, setProductQty] = useState(1);

  return (
    <div className="modal-overlay" onClick={() => onClose()}>
      <dialog className="modal" open onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={() => onClose()}>
          X
        </button>

        <div className="modal__content">
          <div className="modal__image-wrapper">
            <img
              className="modal__image"
              src={product.photo}
              alt={product.productName}
              width={247}
              height={192}
            />
          </div>

          <div className="modal__info">
            <h2 className="modal__title">{product.productName}</h2>
            <p className="modal__price">{formatPrice(product.price)}</p>
            <p className="modal__description">{product.descriptionShort}</p>
            <a
              href="#"
              className="modal__link"
            >{`Veja mais detalhes do produto >`}</a>

            <div className="modal__actions">
              <div className="modal__quantity">
                <button
                  className={`modal__quantity-btn ${productQty === 1 ? "modal__quantity-btn--disabled" : ""}`}
                  onClick={() =>
                    setProductQty(productQty > 1 ? productQty - 1 : 1)
                  }
                >
                  -
                </button>
                <span className="modal__quantity-value">
                  {String(productQty).padStart(2, "0")}
                </span>

                <button
                  className="modal__quantity-btn"
                  onClick={() => setProductQty(productQty + 1)}
                >
                  +
                </button>
              </div>
              <button className="modal__buy-btn">Comprar</button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}
