import React from 'react';
import { testimonials } from '../utils/data';
import './TestimonialsSection.css';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-section__title">Depoimentos dos Clientes</h2>
        <div className="testimonials-section__grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial">
              <div className="testimonial__rating">
                {'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}
              </div>
              <p className="testimonial__text">"{testimonial.text}"</p>
              <p className="testimonial__name">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;