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
              <span className="footer__logo-icon">🐦</span>
              <span className="footer__logo-text">Colibri</span>
            </div>
            <p className="footer__description">
              O sistema completo que faz seu fast food, hamburgueria, pizzaria ou restaurante
              voar no atendimento e na gestão.
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
            <h3 className="footer__title">Soluções</h3>
            <ul className="footer__links">
              <li><a href="#fastfood">Fast Food</a></li>
              <li><a href="#hamburguer-pizzaria">Hamburguerias</a></li>
              <li><a href="#hamburguer-pizzaria">Pizzarias</a></li>
              <li><a href="#restaurante">Restaurantes</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Recursos</h3>
            <ul className="footer__links">
              <li><a href="#funcionalidades">Funcionalidades</a></li>
              <li><a href="#integrações">Integrações</a></li>
              <li><a href="#preços">Preços</a></li>
              <li><a href="#suporte">Suporte</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Empresa</h3>
            <ul className="footer__links">
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#casos">Casos de Sucesso</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__title">Contato</h3>
            <ul className="footer__contact">
              <li>
                <span className="footer__contact-icon">📧</span>
                <a href="mailto:contato@colibri.com.br">contato@colibri.com.br</a>
              </li>
              <li>
                <span className="footer__contact-icon">📞</span>
                <a href="tel:+5511999999999">(11) 99999-9999</a>
              </li>
              <li>
                <span className="footer__contact-icon">📍</span>
                <span>São Paulo, SP - Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Colibri. Todos os direitos reservados.
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
