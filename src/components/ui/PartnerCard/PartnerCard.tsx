import './PartnerCard.scss'

type PartnerCardProps = {
  title: string
  description: string
  image: string
  buttonText?: string
}

export default function PartnerCard({ title, description, image, buttonText }: PartnerCardProps) {
  return (
    <div className="partner-card">
      <img className="partner-card__image" src={image} alt="" aria-hidden="true" loading="lazy" />
      <div className="partner-card__content">
        <h2 className="partner-card__title">{title}</h2>
        <p className="partner-card__description">{description}</p>
        {buttonText && <button className="partner-card__button">{buttonText}</button>}
      </div>
    </div>
  )
}
