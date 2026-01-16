import type { LandingSection } from '../types';

export const landingSections: LandingSection[] = [
  {
    id: 'fastfood',
    type: 'fastfood',
    headline: 'Colibri — o sistema que faz seu fast food voar no atendimento e na gestão',
    subtitle: 'Caixa, pedidos, cozinha e delivery tudo conectado e automatizado pra você ganhar tempo e vender mais.',
    benefits: [
      {
        id: 'benefit-1',
        icon: '⚡',
        title: 'Atendimento ultra-rápido',
        description: 'Atendimento ultra-rápido no caixa e balcão'
      },
      {
        id: 'benefit-2',
        icon: '📱',
        title: 'Dispositivos integrados',
        description: 'Dispositivos integrados (totem, tablet, menu digital)'
      },
      {
        id: 'benefit-3',
        icon: '📊',
        title: 'Relatórios em tempo real',
        description: 'Relatórios em tempo real pra decisões certeiras'
      },
      {
        id: 'benefit-4',
        icon: '✅',
        title: 'Sem erros',
        description: 'Evita erros de pedido e acelera a produção'
      },
      {
        id: 'benefit-5',
        icon: '🤖',
        title: 'PDV intuitivo',
        description: 'PDV Android intuitivo e fácil de usar'
      }
    ],
    features: [
      {
        id: 'feature-1',
        title: 'Velocidade e precisão',
        description: 'Seu fast food precisa de velocidade e precisão — e o Colibri conecta desde o pedido até o relatório final, sem pontos cegos no processo.'
      }
    ],
    socialProof: 'Usado por milhares de operações food service no Brasil, inclusive redes fortes e chefes reconhecidos.',
    ctaText: 'Quero conhecer e revolucionar meu fast food!',
    ctaLink: '#contato'
  },
  {
    id: 'hamburguer-pizzaria',
    type: 'hamburguer-pizzaria',
    headline: 'Hamburguerias & Pizzarias com agilidade e controle total — com Colibri',
    subtitle: 'Sistema que organiza tudo: pedidos, cozinha, estoque e caixa — sem complicar sua operação.',
    benefits: [
      {
        id: 'benefit-hp-1',
        icon: '🔄',
        title: 'Sincronização perfeita',
        description: 'Pedidos sincronizados direto com a cozinha'
      },
      {
        id: 'benefit-hp-2',
        icon: '⚡',
        title: 'Atendimento rápido',
        description: 'Atendimento mais rápido = clientes satisfeitos'
      },
      {
        id: 'benefit-hp-3',
        icon: '📈',
        title: 'Relatórios completos',
        description: 'Relatórios de venda por item, por atendente e por período'
      },
      {
        id: 'benefit-hp-4',
        icon: '📦',
        title: 'Controle de estoque',
        description: 'Controle de estoque e redução de desperdício'
      },
      {
        id: 'benefit-hp-5',
        icon: '🚚',
        title: 'Delivery integrado',
        description: 'Integração com menus digitais e delivery integrado'
      }
    ],
    features: [
      {
        id: 'feature-hp-1',
        title: 'Menos erro de pedido',
        description: '📈 Sistema inteligente que minimiza erros humanos'
      },
      {
        id: 'feature-hp-2',
        title: 'Menos desperdício',
        description: '📉 Controle preciso de ingredientes e estoque'
      },
      {
        id: 'feature-hp-3',
        title: 'Mais lucro',
        description: '💰 Mais giro de mesa e lucro maior'
      }
    ],
    socialProof: 'A Colibri já está presente em mais de 15 mil restaurantes e pizzarias em todo o Brasil.',
    ctaText: 'Quero modernizar minha hamburgueria/pizzaria!',
    ctaLink: '#contato'
  },
  {
    id: 'restaurante',
    type: 'restaurante',
    headline: 'Colibri — seu restaurante mais organizado, rápido e lucrativo',
    subtitle: 'Do caixa ao delivery, das mesas à cozinha, tudo sincronizado pra acelerar o atendimento e clarear seus resultados.',
    benefits: [
      {
        id: 'benefit-rest-1',
        icon: '💻',
        title: 'Sistema completo',
        description: 'Sistema completo de PDV e gestão'
      },
      {
        id: 'benefit-rest-2',
        icon: '🍽️',
        title: 'Pedidos diretos',
        description: 'Pedidos caem direto na cozinha (evita erro humano)'
      },
      {
        id: 'benefit-rest-3',
        icon: '📊',
        title: 'Relatórios em tempo real',
        description: 'Acesso a relatórios e números em tempo real'
      },
      {
        id: 'benefit-rest-4',
        icon: '💼',
        title: 'Tudo integrado',
        description: 'Controle de estoque e financeiro em um só lugar'
      },
      {
        id: 'benefit-rest-5',
        icon: '🎯',
        title: 'Gestão completa',
        description: 'Gestão de mesas, comandas e delivery integrado'
      }
    ],
    features: [
      {
        id: 'feature-rest-1',
        title: 'Filas menores no caixa',
        description: '📌 Agilidade no atendimento e satisfação do cliente'
      },
      {
        id: 'feature-rest-2',
        title: 'Cozinha mais organizada',
        description: '📌 Pedidos organizados e produção otimizada'
      },
      {
        id: 'feature-rest-3',
        title: 'Estoque que só dá lucro',
        description: '📌 Controle inteligente de compras e perdas'
      },
      {
        id: 'feature-rest-4',
        title: 'Relatórios que mostram o que realmente vende',
        description: '📌 Decisões baseadas em dados reais'
      }
    ],
    socialProof: 'A Colibri já está presente em mais de 15 mil restaurantes em todo o Brasil.',
    ctaText: 'Quero transformar meu restaurante!',
    ctaLink: '#contato'
  }
];

export const navigation = [
  { id: 'nav-1', label: 'Fast Food', href: '#fastfood' },
  { id: 'nav-2', label: 'Hamburguerias & Pizzarias', href: '#hamburguer-pizzaria' },
  { id: 'nav-3', label: 'Restaurantes', href: '#restaurante' },
  { id: 'nav-4', label: 'Contato', href: '#contato' }
];
