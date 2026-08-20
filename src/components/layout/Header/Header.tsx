import './Header.scss'
import { NAV_ITEMS, HEADER_ACTIONS } from '@/data/header'
import Logo from '@/assets/icons/Logo.svg'
import Truck from '@/assets/icons/Truck.svg'

import CreditCard from '@/assets/icons/CreditCard.svg'
import ShieldCheck from '@/assets/icons/ShieldCheck.svg'
import MagnifyingGlass from '@/assets/icons/MagnifyingGlass.svg'

export default function Header() {
  return (
    <header className="header">
      {/* TOP BAR */}
      <div className="header__top-bar">
        <div className="header__top-item">
          <img src={ShieldCheck} alt="" aria-hidden="true" width={24} height={24} />
          <span>
            Compra <strong className="header__top-item--highlight">100% segura</strong>
          </span>
        </div>
        <div className="header__top-item">
          <img src={Truck} alt="" aria-hidden="true" width={24} height={24} />
          <span>
            <strong className="header__top-item--highlight">Frete grátis</strong> acima de R$ 200
          </span>
        </div>
        <div className="header__top-item">
          <img src={CreditCard} alt="" aria-hidden="true" width={24} height={24} />
          <span>
            <strong className="header__top-item--highlight">Parcele</strong> suas compras
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
            <label htmlFor="header-search" className="sr-only">
              O que você está buscando?
            </label>
            <input id="header-search" type="text" placeholder="O que você está buscando?" />
            <button aria-label="Buscar">
              <img src={MagnifyingGlass} alt="" aria-hidden="true" width={24} height={24} />
            </button>
          </div>

          <div className="header__actions">
            {HEADER_ACTIONS.map((action) => (
              <button key={action.label} className="header__icon-btn" aria-label={action.label}>
                <img src={action.icon} alt="" aria-hidden="true" width={28} height={28} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* NAV BAR */}
      <nav className="header__nav-bar">
        <ul className="header__nav-list">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.label}
              className={`header__nav-item ${item.active ? 'header__nav-item--active' : ''}`}
            >
              <a href={item.href}>
                {item.icon && (
                  <img src={item.icon} alt="" aria-hidden="true" width={24} height={24} />
                )}
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
