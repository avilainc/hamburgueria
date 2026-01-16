# 🐦 Colibri - Landing Page

Landing page completa e profissional desenvolvida em **TypeScript + React + Vite** para o sistema Colibri, voltado para Fast Food, Hamburguerias, Pizzarias e Restaurantes.

## 🎯 Características

- ✅ **100% TypeScript** - Código totalmente tipado para máxima confiabilidade
- 🎨 **Design Moderno e Responsivo** - Interface bonita e funcional em todos os dispositivos
- ⚡ **Performance Otimizada** - Construído com Vite para carregamento ultra-rápido
- 🎭 **Animações Suaves** - Transições e efeitos visuais profissionais
- 📱 **Mobile-First** - Experiência perfeita em smartphones, tablets e desktops
- ♿ **Acessível** - Seguindo as melhores práticas de acessibilidade web
- 🔒 **Validação de Formulários** - Sistema robusto de validação em TypeScript
- 🎨 **CSS Modular** - Estilos organizados e reutilizáveis

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript 5** - Superset do JavaScript com tipagem estática
- **Vite 5** - Build tool moderna e extremamente rápida
- **CSS3** - Estilos modernos com variáveis CSS e animações
- **ESLint** - Linter para garantir qualidade do código

## 📦 Estrutura do Projeto

```
Hamburgueria/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Button.tsx       # Componente de botão
│   │   ├── Button.css
│   │   ├── Card.tsx         # Componente de card
│   │   ├── Card.css
│   │   ├── Header.tsx       # Cabeçalho com navegação
│   │   ├── Header.css
│   │   ├── Footer.tsx       # Rodapé completo
│   │   ├── Footer.css
│   │   ├── LandingSection.tsx  # Seções da landing page
│   │   ├── LandingSection.css
│   │   ├── ContactForm.tsx     # Formulário de contato
│   │   └── ContactForm.css
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home.tsx         # Página principal
│   │   └── Home.css
│   ├── styles/              # Estilos globais
│   │   └── global.css       # Reset e variáveis CSS
│   ├── types/               # Definições de tipos TypeScript
│   │   └── index.ts
│   ├── hooks/               # Custom React hooks
│   │   ├── useScrollPosition.ts
│   │   └── useIntersectionObserver.ts
│   ├── utils/               # Funções utilitárias
│   │   ├── data.ts          # Dados das landing sections
│   │   └── validation.ts    # Validações de formulário
│   ├── App.tsx              # Componente raiz
│   ├── main.tsx             # Ponto de entrada
│   └── vite-env.d.ts        # Tipos do Vite
├── assets/                  # Recursos estáticos
│   ├── icons/
│   └── images/
├── index.html               # HTML principal
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração TypeScript
├── tsconfig.node.json       # Config TypeScript para Node
├── vite.config.ts           # Configuração Vite
├── .eslintrc.cjs            # Configuração ESLint
├── .gitignore               # Arquivos ignorados pelo Git
└── README.md                # Este arquivo
```

## 🛠️ Instalação e Uso

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# ou
yarn install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# ou
yarn dev
```

Acesse: `http://localhost:5173`

### Build para Produção

```bash
# Criar build otimizado
npm run build

# ou
yarn build
```

### Preview da Build

```bash
# Visualizar build de produção localmente
npm run preview

# ou
yarn preview
```

## 🎨 Estrutura das Seções

### 1. **Hero Section**
- Título principal impactante
- Subtítulo descritivo
- Features principais em destaque
- Animações de entrada

### 2. **Fast Food Section**
- Headline específico para fast food
- 5 benefícios principais
- Prova social
- Call-to-action

### 3. **Hamburguerias & Pizzarias Section**
- Headline direcionado
- 5 benefícios específicos
- Features com ícones
- Prova social
- Call-to-action

### 4. **Restaurantes Section**
- Headline personalizado
- 5 benefícios-chave
- 4 features detalhadas
- Prova social
- Call-to-action

### 5. **Contato Section**
- Formulário completo com validação
- Campos: Nome, Email, Telefone, Tipo de Negócio, Mensagem
- Validação em tempo real
- Feedback visual de sucesso

## 🎯 Funcionalidades Principais

### ✅ Navegação Inteligente
- Menu fixo com scroll suave
- Menu mobile com animação
- Links âncora para cada seção

### ✅ Formulário de Contato
- Validação TypeScript completa
- Feedback visual de erros
- Máscaras de input
- Mensagem de sucesso animada

### ✅ Responsividade Total
- Breakpoints: 1024px, 768px, 480px
- Layout adaptativo
- Imagens otimizadas
- Typography responsivo

### ✅ Animações
- Fade in/out
- Slide in (left/right)
- Scale animations
- Hover effects
- Scroll animations

## 🎨 Paleta de Cores

```css
--color-primary: #FF6B35     /* Laranja principal */
--color-secondary: #004E89   /* Azul secundário */
--color-accent: #FFD23F      /* Amarelo destaque */
--color-success: #06D6A0     /* Verde sucesso */
--color-error: #EF476F       /* Vermelho erro */
```

## 📱 Responsividade

- **Desktop (>1024px)**: Layout completo com 3 colunas
- **Tablet (768px-1024px)**: Layout adaptado com 2 colunas
- **Mobile (<768px)**: Layout vertical otimizado
- **Small Mobile (<480px)**: Layout ultra-compacto

## 🔧 Configurações Avançadas

### Vite Aliases
```typescript
'@' → './src'
'@components' → './src/components'
'@pages' → './src/pages'
'@styles' → './src/styles'
'@types' → './src/types'
'@hooks' → './src/hooks'
'@utils' → './src/utils'
```

### TypeScript Strict Mode
- ✅ Strict type checking habilitado
- ✅ No unused locals
- ✅ No unused parameters
- ✅ No fallthrough cases

## 🚀 Performance

- ⚡ Vite para build ultra-rápido
- 📦 Code splitting automático
- 🗜️ Minificação de assets
- 🎯 Tree shaking
- 🖼️ Lazy loading de imagens

## 📄 Licença

Este projeto foi desenvolvido para GRD Company / Colibri.

## 👨‍💻 Desenvolvimento

Desenvolvido com ❤️ usando as melhores práticas de desenvolvimento web moderno.

---

## 📞 Contato

Para dúvidas ou sugestões sobre o código:
- Email: contato@colibri.com.br
- Site: [colibri.com.br](https://colibri.com.br)

---

**🎉 Site 100% pronto para produção!**
