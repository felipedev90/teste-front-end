import "./Header.scss";
import Logo from "../../assets/icons/Logo.svg";
import Truck from "../../assets/icons/Truck.svg";
import Group from "../../assets/icons/Group.svg";
import Heart from "../../assets/icons/Heart.svg";
import UserCircle from "../../assets/icons/UserCircle.svg";
import CreditCard from "../../assets/icons/CreditCard.svg";
import ShieldCheck from "../../assets/icons/ShieldCheck.svg";
import CrownSimple from "../../assets/icons/CrownSimple.svg";
import ShoppingCart from "../../assets/icons/ShoppingCart.svg";
import MagnifyingGlass from "../../assets/icons/MagnifyingGlass.svg";

export default function Header() {
  return (
    <header className="header">
      {/* TOP BAR */}
      <div className="header__top-bar">
        <div className="header__top-item">
          <img src={ShieldCheck} alt="Segurança" width={24} height={24} />
          <span>
            Compra{" "}
            <strong className="header__top-item--highlight">100% segura</strong>
          </span>
        </div>
        <div className="header__top-item">
          <img src={Truck} alt="Frete" width={24} height={24} />
          <span>
            <strong className="header__top-item--highlight">
              Frete grátis
            </strong>{" "}
            acima de R$ 200
          </span>
        </div>
        <div className="header__top-item">
          <img src={CreditCard} alt="Parcelamento" width={24} height={24} />
          <span>
            <strong className="header__top-item--highlight">Parcele</strong>{" "}
            suas compras
          </span>
        </div>
      </div>

      {/* MAIN BAR */}
      <div className="header__main-bar">
        <div className="header__container">
          <div className="header__logo">
            <img src={Logo} alt="Econverse" width={160} height={40} />
          </div>

          <div className="header__search">
            <input type="text" placeholder="O que você está buscando?" />
            <button aria-label="Buscar">
              <img src={MagnifyingGlass} alt="Buscar" width={24} height={24} />
            </button>
          </div>

          <div className="header__actions">
            <button className="header__icon-btn" aria-label="Meus Pedidos">
              <img src={Group} alt="Pedidos" width={24} height={24} />
            </button>
            <button className="header__icon-btn" aria-label="Favoritos">
              <img src={Heart} alt="Favoritos" width={24} height={24} />
            </button>
            <button className="header__icon-btn" aria-label="Perfil">
              <img src={UserCircle} alt="Perfil" width={24} height={24} />
            </button>
            <button className="header__icon-btn" aria-label="Carrinho">
              <img src={ShoppingCart} alt="Carrinho" width={24} height={24} />
            </button>
          </div>
        </div>
      </div>

      {/* NAV BAR */}
      <nav className="header__nav-bar">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#">TODAS CATEGORIAS</a>
          </li>
          <li className="header__nav-item">
            <a href="#">SUPERMERCADO</a>
          </li>
          <li className="header__nav-item">
            <a href="#">LIVROS</a>
          </li>
          <li className="header__nav-item">
            <a href="#">MODA</a>
          </li>
          <li className="header__nav-item">
            <a href="#">LANÇAMENTOS</a>
          </li>
          <li className="header__nav-item header__nav-item--active">
            <a href="#">OFERTAS DO DIA</a>
          </li>
          <li className="header__nav-item">
            <a href="#">
              <img src={CrownSimple} alt="Coroa" width={24} height={24} />
              ASSINATURA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
