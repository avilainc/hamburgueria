# 📘 Guia de Desenvolvimento - Colibri Landing Page

## 🎯 Visão Geral do Projeto

Este é um site de landing page completo desenvolvido com as tecnologias mais modernas para garantir máxima qualidade, performance e manutenibilidade.

## 📁 Estrutura de Arquivos Detalhada

### `/src/components/` - Componentes Reutilizáveis

#### `Button.tsx` e `Button.css`
- Botão reutilizável com 3 variantes: primary, secondary, outline
- 3 tamanhos: small, medium, large
- Suporte para disabled e fullWidth
- Animações de hover e active states

#### `Card.tsx` e `Card.css`
- Card para exibição de benefícios e features
- 3 variantes: default, highlight, outline
- Suporte para ícones, título, descrição e children
- Hover effects com elevação

#### `Header.tsx` e `Header.css`
- Header fixo com scroll spy
- Menu desktop e mobile responsivo
- Navegação suave entre seções
- Logo animado

#### `Footer.tsx` e `Footer.css`
- Footer completo com 5 seções
- Links organizados por categoria
- Informações de contato
- Redes sociais
- Copyright dinâmico

#### `LandingSection.tsx` e `LandingSection.css`
- Seção reutilizável para cada tipo de negócio
- Renderiza benefits em grid
- Features destacadas
- Prova social com badge
- CTA integrado

#### `ContactForm.tsx` e `ContactForm.css`
- Formulário completo com validação
- 5 campos: nome, email, telefone, tipo de negócio, mensagem
- Validação em tempo real
- Feedback visual de erros
- Mensagem de sucesso animada

### `/src/pages/` - Páginas

#### `Home.tsx` e `Home.css`
- Página principal única (SPA)
- Hero section com animações
- 3 landing sections (Fast Food, Hamburguer/Pizzaria, Restaurantes)
- Seção de contato
- Integração de todos os componentes

### `/src/types/` - Tipos TypeScript

#### `index.ts`
- Interfaces para todos os componentes
- Tipos para formulários
- Tipos para dados das landing sections
- Garante type-safety em todo o projeto

### `/src/utils/` - Utilitários

#### `data.ts`
- Dados das 3 landing sections
- Menu de navegação
- Centraliza todo o conteúdo do site

#### `validation.ts`
- Funções de validação de email
- Validação de telefone
- Validação completa de formulário
- Formatação de telefone

### `/src/hooks/` - Custom Hooks

#### `useScrollPosition.ts`
- Hook para capturar posição do scroll
- Útil para animações baseadas em scroll

#### `useIntersectionObserver.ts`
- Hook para observar elementos na viewport
- Usado para lazy loading e animações

### `/src/styles/` - Estilos Globais

#### `global.css`
- Reset CSS
- Variáveis CSS (cores, espaçamentos, tipografia)
- Classes utilitárias
- Animações globais
- Responsividade base

## 🎨 Sistema de Design

### Cores
```css
Primária: #FF6B35 (Laranja vibrante)
Secundária: #004E89 (Azul profissional)
Destaque: #FFD23F (Amarelo)
Sucesso: #06D6A0 (Verde)
Erro: #EF476F (Vermelho)
```

### Tipografia
```css
Família base: System fonts (performance)
Família heading: Inter (modernidade)
Escala: 0.75rem a 3.75rem
```

### Espaçamentos
```css
xs: 0.5rem (8px)
sm: 1rem (16px)
md: 1.5rem (24px)
lg: 2rem (32px)
xl: 3rem (48px)
2xl: 4rem (64px)
3xl: 6rem (96px)
```

### Breakpoints
```css
Mobile: < 768px
Tablet: 768px - 1024px
Desktop: > 1024px
Small Mobile: < 480px
```

## 🔧 Padrões de Código

### Nomenclatura
- Componentes: PascalCase (`Button`, `ContactForm`)
- Arquivos: PascalCase para TSX, camelCase para TS
- CSS Classes: BEM notation (`component__element--modifier`)
- Variáveis: camelCase
- Constantes: UPPER_SNAKE_CASE

### Estrutura de Componente
```typescript
import React from 'react';
import type { Props } from '../types';
import './Component.css';

const Component: React.FC<Props> = ({ prop1, prop2 }) => {
  // 1. Hooks
  // 2. Estado
  // 3. Efeitos
  // 4. Handlers
  // 5. Render

  return (
    <div className="component">
      {/* JSX */}
    </div>
  );
};

export default Component;
```

### TypeScript
- Sempre tipar props
- Usar interfaces para objetos
- Usar types para unions/intersections
- Evitar `any`
- Preferir `unknown` quando tipo é desconhecido

## 🚀 Comandos Úteis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor dev
npm run build        # Build de produção
npm run preview      # Preview da build
npm run lint         # Verificar erros de lint

# Instalação
npm install          # Instalar dependências
npm ci               # Instalação limpa (CI/CD)

# Limpeza
rm -rf node_modules dist
npm install
```

## 🧪 Testando o Site

### Checklist de Testes

#### Desktop
- [ ] Navegação entre seções funciona
- [ ] Menu fixo aparece após scroll
- [ ] Todos os botões respondem
- [ ] Formulário valida corretamente
- [ ] Links externos abrem em nova aba
- [ ] Animações carregam suavemente

#### Tablet
- [ ] Layout adapta corretamente
- [ ] Cards ajustam em grid 2 colunas
- [ ] Menu continua funcional

#### Mobile
- [ ] Menu hamburguer funciona
- [ ] Layout stack funciona
- [ ] Formulário é usável
- [ ] Touch targets são adequados
- [ ] Texto é legível

## 🐛 Debugging

### Problemas Comuns

**Erro: Cannot find module 'react'**
```bash
npm install react react-dom
```

**Erro: Types missing**
```bash
npm install --save-dev @types/react @types/react-dom
```

**Estilos não aplicam**
- Verifique se o import CSS está correto
- Verifique a ordem dos imports
- Limpe o cache do browser

**Animações não funcionam**
- Verifique se global.css foi importado
- Confirme que as classes estão aplicadas
- Teste sem transitions (pode ser performance)

## 📚 Recursos de Aprendizado

- [React Docs](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 🔒 Segurança

- Sanitize user inputs
- Validar no backend também
- Usar HTTPS em produção
- Configurar CORS adequadamente
- Proteger variáveis sensíveis

## 📈 Próximos Passos

Possíveis melhorias futuras:
- [ ] Adicionar testes (Jest, Testing Library)
- [ ] Implementar i18n (internacionalização)
- [ ] Adicionar Google Analytics
- [ ] Integrar com CMS
- [ ] Adicionar blog
- [ ] Implementar chat ao vivo
- [ ] Adicionar mais animações
- [ ] Otimizar imagens com WebP
- [ ] Implementar Service Worker (PWA)
- [ ] Adicionar dark mode

## 🤝 Contribuindo

Para adicionar novas features:
1. Crie um novo branch
2. Implemente a feature
3. Teste em todos os devices
4. Faça commit com mensagem descritiva
5. Abra Pull Request

## 📞 Suporte

Para dúvidas sobre o código:
- Consulte este guia primeiro
- Revise a documentação inline
- Verifique os comentários no código
- Entre em contato com a equipe de desenvolvimento

---

**Desenvolvido com 💙 para GRD Company / Colibri**
