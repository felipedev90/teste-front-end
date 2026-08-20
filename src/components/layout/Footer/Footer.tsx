import Instagram from '@/assets/icons/Instagram.svg'
import Facebook from '@/assets/icons/Facebook.svg'
import Linkedin from '@/assets/icons/Linkedin.svg'
import Logo from '@/assets/icons/Logo.svg'
import { FOOTER_LINK_GROUPS } from '@/data/footer'
import './Footer.scss'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__company">
            <img src={Logo} alt="Econverse Logo" className="footer__logo" width={160} height={40} />
            <p className="footer__description">
              Nós somos a Econverse, conectando pessoas e ideias.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram">
                <img src={Instagram} alt="" aria-hidden="true" width={24} height={24} />
              </a>
              <a href="#" aria-label="Facebook">
                <img src={Facebook} alt="" aria-hidden="true" width={24} height={24} />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={Linkedin} alt="" aria-hidden="true" width={24} height={24} />
              </a>
            </div>
          </div>

          <div className="footer__divider" />

          <div className="footer__links">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title} className="footer__link-group">
                <h3 className="footer__title">{group.title}</h3>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container-bottom">
          <p>
            © {new Date().getFullYear()} Econverse • Todos os direitos reservados • Desenvolvido por{' '}
            <strong>Felipe Augusto</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
