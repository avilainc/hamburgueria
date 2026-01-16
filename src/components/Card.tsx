import React from 'react';
import { CardProps } from '../types';
import './Card.css';

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon,
  children,
  variant = 'default',
  className = '',
}) => {
  const classes = ['card', `card--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {icon && <div className="card__icon">{icon}</div>}
      <h3 className="card__title">{title}</h3>
      {description && <p className="card__description">{description}</p>}
      {children && <div className="card__content">{children}</div>}
    </div>
  );
};

export default Card;
