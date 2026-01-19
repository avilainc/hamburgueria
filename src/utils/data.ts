export const navigation = [
  { id: 'nav-1', label: 'Home', href: '#home' },
  { id: 'nav-2', label: 'Menu', href: '#menu' },
  { id: 'nav-3', label: 'Sobre Nós', href: '#sobre' },
  { id: 'nav-4', label: 'Depoimentos', href: '#depoimentos' },
  { id: 'nav-5', label: 'Localização', href: '#localizacao' },
  { id: 'nav-6', label: 'Contato', href: '#contato' }
];

export const menuItems = [
  {
    id: 'menu-1',
    name: 'Hambúrguer Clássico',
    description: 'Pão, carne 180g, queijo, alface, tomate e molho especial.',
    price: 25.00,
    image: '/assets/images/burger1.jpg' // placeholder
  },
  {
    id: 'menu-2',
    name: 'Hambúrguer Duplo',
    description: 'Dois hambúrgueres de 180g cada, queijo duplo, bacon e molhos.',
    price: 35.00,
    image: '/assets/images/burger2.jpg'
  },
  {
    id: 'menu-3',
    name: 'Hambúrguer Vegano',
    description: 'Hambúrguer de grão-de-bico, queijo vegano, alface, tomate e molho.',
    price: 28.00,
    image: '/assets/images/burger3.jpg'
  },
  {
    id: 'menu-4',
    name: 'Batata Frita Grande',
    description: 'Porção grande de batatas fritas crocantes.',
    price: 12.00,
    image: '/assets/images/fries.jpg'
  },
  {
    id: 'menu-5',
    name: 'Refrigerante 500ml',
    description: 'Coca-Cola, Sprite ou Fanta.',
    price: 5.00,
    image: '/assets/images/drink.jpg'
  }
];

export const testimonials = [
  {
    id: 'test-1',
    name: 'João Silva',
    text: 'Melhor hambúrguer que já comi! Serviço rápido e atendimento excelente.',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Maria Oliveira',
    text: 'Ambiente agradável e comida deliciosa. Recomendo a todos!',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Pedro Santos',
    text: 'Preços justos e qualidade impecável. Voltarei sempre.',
    rating: 4
  }
];

export const aboutInfo = {
  title: 'Sobre a Hamburgueria Colibri',
  description: 'Desde 2010, servimos os melhores hambúrgueres da cidade com ingredientes frescos e paixão pela culinária. Nossa missão é proporcionar uma experiência única aos nossos clientes.',
  image: '/assets/images/about.jpg'
};

export const locationInfo = {
  address: 'Rua das Flores, 123 - Centro, Cidade',
  phone: '(11) 99999-9999',
  hours: 'Seg-Sex: 11h-23h | Sáb-Dom: 12h-00h',
  mapUrl: 'https://maps.google.com/?q=Rua+das+Flores+123'
};
