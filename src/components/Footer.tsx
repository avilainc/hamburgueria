import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section footer__section--brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">🍔</span>
              <span className="footer__logo-text">Hamburgueria Colibri</span>
            </div>
            <p className="footer__description">
              Os melhores hambúrgueres da cidade, feitos com ingredientes frescos e muito amor.
            </p>
            <div className="footer__social">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                📘
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                📸
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                💼
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                📹
              </a>
            </div>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Menu</h3>
            <ul className="footer__links">
              <li><a href="#menu">Hambúrgueres</a></li>
              <li><a href="#menu">Acompanhamentos</a></li>
              <li><a href="#menu">Bebidas</a></li>
              <li><a href="#menu">Promoções</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Sobre</h3>
            <ul className="footer__links">
              <li><a href="#sobre">Nossa História</a></li>
              <li><a href="#localizacao">Localização</a></li>
              <li><a href="#contato">Contato</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Contato</h3>
            <ul className="footer__contact">
              <li>
                <span className="footer__contact-icon">📧</span>
                <a href="mailto:contato@hamburgueriacolibri.com.br">contato@hamburgueriacolibri.com.br</a>
              </li>
              <li>
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+5511999999999">(11) 99999-9999</a>
              </li>
              <li>
                <span className="footer__contact-icon">📍</span>
                <span>Rua das Flores, 123 - Centro</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Hamburgueria Colibri. Todos os direitos reservados.
          </p>
          <div className="footer__legal">
            <a href="#privacidade">Política de Privacidade</a>
            <a href="#termos">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
