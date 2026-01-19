export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface FormErrors {
  [key: string]: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  children: React.ReactNode | string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export interface CardProps {
  title: string;
  description?: string;
  icon?: string;
  children?: React.ReactNode | string;
  variant?: 'default' | 'highlight' | 'outline';
  className?: string;
}
