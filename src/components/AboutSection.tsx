import React from 'react';
import { aboutInfo } from '../utils/data';
import './AboutSection.css';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="about-section__content">
          <div className="about-section__text">
            <h2 className="about-section__title">{aboutInfo.title}</h2>
            <p className="about-section__description">{aboutInfo.description}</p>
          </div>
          <img src={aboutInfo.image} alt="Sobre nós" className="about-section__image" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;