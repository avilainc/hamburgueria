import React from 'react';
import { menuItems } from '../utils/data';
import './MenuSection.css';

const MenuSection: React.FC = () => {
  return (
    <section id="menu" className="menu-section">
      <div className="container">
        <h2 className="menu-section__title">Nosso Menu</h2>
        <div className="menu-section__grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-item">
              <img src={item.image} alt={item.name} className="menu-item__image" />
              <h3 className="menu-item__name">{item.name}</h3>
              <p className="menu-item__description">{item.description}</p>
              <p className="menu-item__price">R$ {item.price.toFixed(2)}</p>
              <button className="menu-item__button">Fazer Pedido</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;