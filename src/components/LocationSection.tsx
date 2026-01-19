import React from 'react';
import { locationInfo } from '../utils/data';
import './LocationSection.css';

const LocationSection: React.FC = () => {
  return (
    <section id="localizacao" className="location-section">
      <div className="container">
        <h2 className="location-section__title">Nossa Localização</h2>
        <div className="location-section__content">
          <div className="location-section__info">
            <p><strong>Endereço:</strong> {locationInfo.address}</p>
            <p><strong>Telefone:</strong> {locationInfo.phone}</p>
            <p><strong>Horário de Funcionamento:</strong> {locationInfo.hours}</p>
            <a href={locationInfo.mapUrl} target="_blank" rel="noopener noreferrer" className="location-section__link">Ver no Mapa</a>
          </div>
          <div className="location-section__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0!2d-46.6!3d-23.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMwJzAwLjAiUyA0NsKwMzYnMDAuMCJX!5e0!3m2!1sen!2sbr!4v1234567890!5m2!1sen!2sbr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localização da Hamburgueria"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;