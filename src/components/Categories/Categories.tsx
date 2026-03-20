import "./Categories.scss";
import Corrida from "../../assets/icons/Corrida.svg";
import CuidadosDeSaude from "../../assets/icons/CuidadosDeSaude.svg";
import Ferramentas from "../../assets/icons/Ferramentas.svg";
import Moda from "../../assets/icons/Moda.svg";
import Tech from "../../assets/icons/Tech.svg";
import Whiskey from "../../assets/icons/Whiskey.svg";
import Supermercados from "../../assets/icons/Supermercados.svg";

interface Category {
  name: string;
  icon: string;
  active: boolean;
}

export default function Categories() {
  const categories: Category[] = [
    {
      name: "Tecnologia",
      icon: Tech,
      active: true,
    },
    {
      name: "Supermercado",
      icon: Supermercados,
      active: false,
    },
    {
      name: "Bebidas",
      icon: Whiskey,
      active: false,
    },
    {
      name: "Ferramenta",
      icon: Ferramentas,
      active: false,
    },
    {
      name: "Saúde",
      icon: CuidadosDeSaude,
      active: false,
    },
    {
      name: "Esportes e Fitness",
      icon: Corrida,
      active: false,
    },
    {
      name: "Moda",
      icon: Moda,
      active: false,
    },
  ];

  return (
    <section className="categories">
      <div className="categories__container">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`category ${cat.active ? "category--active" : ""}`}
          >
            <div className="category__box">
              <img src={cat.icon} alt={cat.name} width={100} height={100} />
            </div>
            <span className="category__name">{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
