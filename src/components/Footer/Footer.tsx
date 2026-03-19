import Instagram from "../../assets/icons/Instagram.svg";
import Facebook from "../../assets/icons/Facebook.svg";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Logo from "../../assets/icons/Logo.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__container">
          <div className="footer__company">
            <img src={Logo} alt="Econverse Logo" className="footer__logo" />
            <p className="footer__description">
              Nós somos a Econverse, conectando pessoas e ideias.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Instagram">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
            </div>
          </div>

          <div className="footer__divider"></div>

          <div className="footer__links">
            <div className="footer__link-group">
              <h3 className="footer__title">Institucional</h3>
              <ul>
                <li>
                  <a href="#">Sobre Nós</a>
                </li>
                <li>
                  <a href="#">Movimento</a>
                </li>
                <li>
                  <a href="#">Trabalhe conosco</a>
                </li>
              </ul>
            </div>

            <div className="footer__link-group">
              <h3 className="footer__title">Ajuda</h3>
              <ul>
                <li>
                  <a href="#">Suporte</a>
                </li>
                <li>
                  <a href="#">Fale Conosco</a>
                </li>
                <li>
                  <a href="#">Perguntas Frequentes</a>
                </li>
              </ul>
            </div>

            <div className="footer__link-group">
              <h3 className="footer__title">Termos</h3>
              <ul>
                <li>
                  <a href="#">Termos e Condições</a>
                </li>
                <li>
                  <a href="#">Política de Privacidade</a>
                </li>
                <li>
                  <a href="#">Troca e Devolução</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__container">
          <p>
            © {new Date().getFullYear()} Econverse • Todos os direitos
            reservados • Desenvolvido por <strong>Felipe Augusto</strong>
          </p>
        </div>
      </div>
    </footer>
  );
}
