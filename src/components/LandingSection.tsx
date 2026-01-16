import React from 'react';
import type { LandingSection } from '../types';
import Card from './Card';
import Button from './Button';
import './LandingSection.css';

interface LandingSectionProps {
  section: LandingSection;
  index: number;
}

const LandingSectionComponent: React.FC<LandingSectionProps> = ({ section, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <section id={section.id} className={`landing-section ${isEven ? 'landing-section--even' : 'landing-section--odd'}`}>
      <div className="container">
        <div className="landing-section__header">
          <h2 className="landing-section__headline">{section.headline}</h2>
          <p className="landing-section__subtitle">{section.subtitle}</p>
          <a href="https://colibri.com.br" target="_blank" rel="noopener noreferrer" className="landing-section__link">
            colibri.com.br
          </a>
        </div>

        <div className="landing-section__benefits">
          {section.benefits.map((benefit) => (
            <Card
              key={benefit.id}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
              variant="default"
            />
          ))}
        </div>

        {section.features && section.features.length > 0 && (
          <div className="landing-section__features">
            <div className="landing-section__features-title">
              <h3>{section.type === 'hamburguer-pizzaria' ? 'O que você ganha' : 'Por que funciona'}</h3>
            </div>
            {section.features.map((feature) => (
              <div key={feature.id} className="landing-section__feature">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        )}

        <div className="landing-section__social-proof">
          <p>{section.socialProof}</p>
          <span className="landing-section__badge">Bloomberg Línea Brasil</span>
        </div>

        <div className="landing-section__cta">
          <Button variant="primary" size="large" onClick={() => {
            const element = document.querySelector('#contato');
            if (element) element.scrollIntoView({ behavior: 'smooth' });
          }}>
            👉 {section.ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LandingSectionComponent;
