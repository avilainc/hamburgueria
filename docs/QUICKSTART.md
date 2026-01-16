# 🚀 Início Rápido - Colibri Landing Page

## ⚡ Setup em 3 Passos

### 1️⃣ Instalar Dependências

```bash
npm install
```

Isso instalará:
- React 18.2.0
- TypeScript 5.2.2
- Vite 5.0.8
- ESLint e dependências

**Tempo estimado:** 2-3 minutos

---

### 2️⃣ Iniciar Servidor de Desenvolvimento

```bash
npm run dev
```

O site estará disponível em: **http://localhost:5173**

**Hot Module Replacement (HMR)** está ativado - suas mudanças aparecerão instantaneamente!

---

### 3️⃣ Abrir no Navegador

Acesse: **http://localhost:5173**

Você verá:
- ✅ Hero section com animações
- ✅ 3 seções de landing (Fast Food, Hamburguerias/Pizzarias, Restaurantes)
- ✅ Formulário de contato funcional
- ✅ Header com menu responsivo
- ✅ Footer completo

---

## 🎯 O que Você Tem

### ✅ Site Completo e Funcional
- Landing page profissional
- Design moderno e responsivo
- Animações suaves
- Formulário com validação
- SEO-friendly

### ✅ Código de Qualidade
- 100% TypeScript
- Componentes reutilizáveis
- Bem documentado
- Segue melhores práticas
- Zero erros de lint

### ✅ Pronto para Produção
- Build otimizado
- Performance excelente
- Compatível com todos navegadores modernos
- Mobile-first

---

## 📱 Testando Responsividade

### Chrome DevTools
1. Abra DevTools (F12)
2. Clique no ícone de dispositivo (Ctrl+Shift+M)
3. Teste diferentes resoluções:
   - **iPhone SE** (375x667)
   - **iPad** (768x1024)
   - **Desktop** (1920x1080)

---

## 🎨 Personalizando

### Alterar Cores

Edite: `src/styles/global.css`

```css
:root {
  --color-primary: #FF6B35;     /* Sua cor primária */
  --color-secondary: #004E89;   /* Sua cor secundária */
  --color-accent: #FFD23F;      /* Cor de destaque */
}
```

### Alterar Conteúdo

Edite: `src/utils/data.ts`

Você pode modificar:
- Headlines
- Subtítulos
- Benefícios
- Features
- Provas sociais
- Textos dos CTAs

### Adicionar Imagens

1. Adicione suas imagens em: `assets/images/`
2. Importe no componente:
```typescript
import logo from '../assets/images/logo.png';
```
3. Use no JSX:
```jsx
<img src={logo} alt="Logo" />
```

---

## 🔧 Build para Produção

```bash
npm run build
```

Arquivos gerados em: `dist/`

**Preview da build:**
```bash
npm run preview
```

---

## 📊 Estrutura Rápida

```
src/
├── components/     ← Componentes reutilizáveis
├── pages/          ← Páginas (só Home por enquanto)
├── styles/         ← Estilos globais
├── types/          ← Tipos TypeScript
├── utils/          ← Funções auxiliares
└── hooks/          ← Custom hooks React
```

---

## 🐛 Problemas Comuns

### ❌ "Cannot find module 'react'"

**Solução:**
```bash
rm -rf node_modules
npm install
```

### ❌ Porta 5173 em uso

**Solução:**
```bash
npm run dev -- --port 3000
```

### ❌ Erros de TypeScript

**Solução:**
```bash
npm run lint
```

---

## 📚 Próximos Passos

### 1. Entenda o Código
- Leia: `DEVELOPMENT.md` para guia completo
- Explore: `src/components/` para ver componentes
- Revise: `src/utils/data.ts` para conteúdo

### 2. Personalize
- Altere cores em `global.css`
- Modifique conteúdo em `data.ts`
- Adicione suas imagens

### 3. Deploy
- Leia: `DEPLOY.md` para instruções
- Escolha: Vercel, Netlify ou GitHub Pages
- Publique!

---

## 🎓 Aprendendo

### Se você é novo em:

**React:**
- [Tutorial Oficial React](https://react.dev/learn)
- Foco em: Components, Props, State

**TypeScript:**
- [TypeScript para Iniciantes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- Foco em: Interfaces, Types

**CSS:**
- [CSS Tricks](https://css-tricks.com/)
- Foco em: Flexbox, Grid, Animations

---

## ✅ Checklist Inicial

- [ ] npm install executado com sucesso
- [ ] npm run dev iniciou sem erros
- [ ] Site carrega em http://localhost:5173
- [ ] Menu de navegação funciona
- [ ] Formulário valida campos
- [ ] Site é responsivo no mobile
- [ ] Build de produção funciona (npm run build)

---

## 🎉 Parabéns!

Você tem um site profissional totalmente funcional!

**O que você pode fazer agora:**
- ✨ Personalize as cores e conteúdo
- 📸 Adicione suas próprias imagens
- 🚀 Faça deploy para produção
- 📈 Adicione Google Analytics
- 🎨 Experimente novas animações

---

## 📞 Precisa de Ajuda?

1. **Documentação completa:** Leia `README_PROJETO.md`
2. **Guia de desenvolvimento:** Leia `DEVELOPMENT.md`
3. **Guia de deploy:** Leia `DEPLOY.md`
4. **Conteúdo original:** Leia `CONTENT.md`

---

**💡 Dica:** Mantenha o servidor dev rodando enquanto desenvolve. As mudanças aparecerão automaticamente!

**🚀 Boa sorte com seu projeto!**
