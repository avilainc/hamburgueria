import { ContactFormData, FormErrors } from '@types/index';

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

export const validateForm = (data: ContactFormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.name || data.name.trim().length < 3) {
    errors.name = 'Nome deve ter pelo menos 3 caracteres';
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.email = 'E-mail inválido';
  }

  if (!data.phone || !validatePhone(data.phone)) {
    errors.phone = 'Telefone inválido';
  }

  if (!data.businessType) {
    errors.businessType = 'Selecione o tipo de negócio';
  }

  return errors;
};

export const formatPhone = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 11) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
  } else if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
  }
  
  return phone;
};
