import { useEffect, useRef, useState } from 'react'
import { formatPrice } from '@/utils/utils'
import type { Product } from '@/types/Product'
import QuantitySelector from '@/components/ui/QuantitySelector/QuantitySelector'
import './ProductModal.scss'

type ProductModalProps = {
  product: Product
  onClose: () => void
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [productQty, setProductQty] = useState(1)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    dialog.showModal()

    function handleClose() {
      onClose()
    }

    dialog.addEventListener('close', handleClose)
    return () => dialog.removeEventListener('close', handleClose)
  }, [onClose])

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          dialogRef.current?.close()
        }
      }}
    >
      <button
        className="modal__close"
        aria-label="Fechar"
        onClick={() => dialogRef.current?.close()}
      >
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
          <h2 id="modal-title" className="modal__title">
            {product.productName}
          </h2>
          <p className="modal__price">{formatPrice(product.price)}</p>
          <p className="modal__description">{product.descriptionShort}</p>
          <a href="#" className="modal__link">{`Veja mais detalhes do produto >`}</a>

          <div className="modal__actions">
            <QuantitySelector value={productQty} onChange={setProductQty} />
            <button className="modal__buy-btn">Comprar</button>
          </div>
        </div>
      </div>
    </dialog>
  )
}
