interface PartnerCardProps {
  title: string;
  description: string;
  image: string;
  buttonText?: string;
}

export default function PartnerCard({
  title,
  description,
  image,
  buttonText,
}: PartnerCardProps) {
  return (
    <div className="partner__card" style={{ backgroundImage: `url(${image})` }}>
      <div className="partner__content">
        <h2 className="partner__title">{title}</h2>
        <p className="partner__description">{description}</p>
        {buttonText && (
          <button className="partner__button">{buttonText}</button>
        )}
      </div>
    </div>
  );
}
