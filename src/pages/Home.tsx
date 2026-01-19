import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MenuSection from '../components/MenuSection';
import AboutSection from '../components/AboutSection';
import TestimonialsSection from '../components/TestimonialsSection';
import LocationSection from '../components/LocationSection';
import ContactForm from '../components/ContactForm';
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
                Os Melhores Hambúrgueres da Cidade
              </h1>
              <p className="home__hero-subtitle animate-fadeInUp">
                Ingredientes frescos, sabor incomparável e atendimento excepcional. Venha nos visitar!
              </p>
              <div className="home__hero-features animate-fadeIn">
                <div className="home__hero-feature">
                  <span className="home__hero-feature-icon">🍔</span>
                  <span>Hambúrgueres Artesanais</span>
                </div>
                <div className="home__hero-feature">
                  <span className="home__hero-feature-icon">🥤</span>
                  <span>Refrigerantes Gelados</span>
                </div>
                <div className="home__hero-feature">
                  <span className="home__hero-feature-icon">🚚</span>
                  <span>Delivery Rápido</span>
                </div>
              </div>
              <a href="#menu" className="home__hero-cta">Ver Menu</a>
            </div>
          </div>
          <div className="home__hero-background">
            <div className="home__hero-circle home__hero-circle--1"></div>
            <div className="home__hero-circle home__hero-circle--2"></div>
            <div className="home__hero-circle home__hero-circle--3"></div>
          </div>
        </section>

        <MenuSection />
        <AboutSection />
        <TestimonialsSection />
        <LocationSection />

        <section id="contato" className="home__contact">
          <div className="container">
            <div className="home__contact-header">
              <h2 className="home__contact-title">
                Entre em Contato
              </h2>
              <p className="home__contact-subtitle">
                Tem alguma dúvida ou quer fazer um pedido? Fale conosco!
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
