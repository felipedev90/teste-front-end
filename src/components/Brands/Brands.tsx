import Logo from "../../assets/icons/Logo.svg";

export default function Brands() {
  const brands: number[] = [1, 2, 3, 4, 5];

  return (
    <section className="brands">
      <div className="brands__container">
        <h2 className="brands__title">Navegue por marcas</h2>
        <div className="brands__list">
          {brands.map((_, index) => (
            <div key={index} className="brands__item">
              <img src={Logo} alt="Marca parceira" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
