import './QuantitySelector.scss'

type QuantitySelectorProps = {
  value: number
  onChange: (value: number) => void
}

export default function QuantitySelector({ value, onChange }: QuantitySelectorProps) {
  return (
    <div className="quantity-selector">
      <button
        className={`quantity-selector__btn ${value === 1 ? 'quantity-selector__btn--disabled' : ''}`}
        aria-label="Diminuir quantidade"
        disabled={value === 1}
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        -
      </button>
      <span className="quantity-selector__value">{String(value).padStart(2, '0')}</span>
      <button
        className="quantity-selector__btn"
        aria-label="Aumentar quantidade"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  )
}
