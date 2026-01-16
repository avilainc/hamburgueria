import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LandingSectionComponent from '../components/LandingSection';
import ContactForm from '../components/ContactForm';
import { landingSections } from '../utils/data';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <Header />
      
      <main className="home__main">
        <section className="home__hero" id="home">
          <div className="container">
            <div className="home__hero-content">
              <h1 className="home__hero-title animate-fadeInDown">
                Transforme seu negócio com <span className="highlight">Colibri</span>
              </h1>
              <p className="home__hero-subtitle animate-fadeInUp">
                A solução completa para Fast Food, Hamburguerias, Pizzarias e Restaurantes
              </p>
              <div className="home__hero-features animate-fadeIn">
                <div className="home__hero-feature">
                  <span className="home__hero-feature-icon">🚀</span>
                  <span>Atendimento rápido</span>
                </div>
                <div className="home__hero-feature">
                  <span className="home__hero-feature-icon">📊</span>
                  <span>Gestão completa</span>
                </div>
                <div className="home__hero-feature">
                  <span className="home__hero-feature-icon">💰</span>
                  <span>Mais lucro</span>
                </div>
              </div>
            </div>
          </div>
          <div className="home__hero-background">
            <div className="home__hero-circle home__hero-circle--1"></div>
            <div className="home__hero-circle home__hero-circle--2"></div>
            <div className="home__hero-circle home__hero-circle--3"></div>
          </div>
        </section>

        {landingSections.map((section, index) => (
          <LandingSectionComponent key={section.id} section={section} index={index} />
        ))}

        <section id="contato" className="home__contact">
          <div className="container">
            <div className="home__contact-header">
              <h2 className="home__contact-title">
                Pronto para revolucionar seu negócio?
              </h2>
              <p className="home__contact-subtitle">
                Preencha o formulário abaixo e nossa equipe entrará em contato com você
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
