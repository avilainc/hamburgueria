import React, { useState } from 'react';
import type { ContactFormData, FormErrors } from '../types';
import { validateForm } from '../utils/validation';
import Button from './Button';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    businessType: 'fastfood',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: 'fastfood',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="contact-form contact-form--success">
        <div className="contact-form__success-icon">✅</div>
        <h3>Obrigado!</h3>
        <p>Recebemos sua mensagem e entraremos em contato em breve.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__group">
        <label htmlFor="name" className="contact-form__label">
          Nome completo *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`contact-form__input ${errors.name ? 'contact-form__input--error' : ''}`}
          placeholder="Seu nome completo"
        />
        {errors.name && <span className="contact-form__error">{errors.name}</span>}
      </div>

      <div className="contact-form__group">
        <label htmlFor="email" className="contact-form__label">
          E-mail *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`contact-form__input ${errors.email ? 'contact-form__input--error' : ''}`}
          placeholder="seu@email.com"
        />
        {errors.email && <span className="contact-form__error">{errors.email}</span>}
      </div>

      <div className="contact-form__group">
        <label htmlFor="phone" className="contact-form__label">
          Telefone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`contact-form__input ${errors.phone ? 'contact-form__input--error' : ''}`}
          placeholder="(11) 99999-9999"
        />
        {errors.phone && <span className="contact-form__error">{errors.phone}</span>}
      </div>

      <div className="contact-form__group">
        <label htmlFor="businessType" className="contact-form__label">
          Tipo de negócio *
        </label>
        <select
          id="businessType"
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className={`contact-form__select ${errors.businessType ? 'contact-form__select--error' : ''}`}
        >
          <option value="fastfood">Fast Food</option>
          <option value="hamburguer-pizzaria">Hamburgueria / Pizzaria</option>
          <option value="restaurante">Restaurante</option>
          <option value="outro">Outro</option>
        </select>
        {errors.businessType && <span className="contact-form__error">{errors.businessType}</span>}
      </div>

      <div className="contact-form__group">
        <label htmlFor="message" className="contact-form__label">
          Mensagem (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-form__textarea"
          placeholder="Conte-nos mais sobre seu negócio..."
          rows={4}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="large"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Quero conhecer o Colibri!'}
      </Button>
    </form>
  );
};

export default ContactForm;
