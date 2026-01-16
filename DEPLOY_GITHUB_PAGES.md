# 🚀 Deploy no GitHub Pages - Guia Completo

## ✅ Configurações Aplicadas

O projeto já está configurado para deploy no GitHub Pages! As seguintes configurações foram aplicadas:

### 1. package.json
- ✅ Adicionado `homepage`: "https://avilaops.github.io/hamburgueria"
- ✅ Adicionado script `predeploy`
- ✅ Adicionado script `deploy`
- ✅ Adicionado dependência `gh-pages`

### 2. vite.config.ts
- ✅ Configurado `base: '/hamburgueria/'` para o caminho correto

### 3. GitHub Actions
- ✅ Criado workflow `.github/workflows/deploy.yml` para deploy automático

---

## 🎯 Método 1: Deploy Automático com GitHub Actions (Recomendado)

### Passo 1: Preparar o Repositório

```bash
# 1. Inicializar Git (se ainda não fez)
git init

# 2. Adicionar o remote
git remote add origin https://github.com/avilainc/hamburgueria.git

# 3. Instalar dependências
npm install

# 4. Fazer commit de todos os arquivos
git add .
git commit -m "🎉 Initial commit - Colibri Landing Page"

# 5. Push para o GitHub
git push -u origin main
```

### Passo 2: Configurar GitHub Pages

1. Acesse: https://github.com/avilainc/hamburgueria/settings/pages

2. Em **"Build and deployment"**:
   - **Source:** Selecione "GitHub Actions"
   
3. Aguarde alguns minutos para o deploy automático

### Passo 3: Acessar o Site

Seu site estará disponível em:
**https://avilainc.github.io/hamburgueria**

---

## 🎯 Método 2: Deploy Manual com gh-pages

### Passo 1: Instalar Dependências

```bash
npm install
```

### Passo 2: Deploy Manual

```bash
# Deploy com um único comando
npm run deploy
```

Este comando irá:
1. Compilar o projeto (`npm run build`)
2. Fazer deploy da pasta `dist` para o branch `gh-pages`

### Passo 3: Configurar GitHub Pages (Primeira vez)

1. Acesse: https://github.com/avilainc/hamburgueria/settings/pages
2. Em **"Source"**: Selecione "Deploy from a branch"
3. Em **"Branch"**: Selecione `gh-pages` e pasta `/ (root)`
4. Clique em **"Save"**

### Passo 4: Acessar

Em 2-3 minutos, seu site estará em:
**https://avilainc.github.io/hamburgueria**

---

## 📋 Checklist de Deploy

### Antes do Deploy
- [ ] Instalou as dependências (`npm install`)
- [ ] Testou localmente (`npm run dev`)
- [ ] Build funciona sem erros (`npm run build`)
- [ ] Preview da build está OK (`npm run preview`)

### Durante o Deploy
- [ ] Git está inicializado
- [ ] Remote está configurado
- [ ] Commit foi feito
- [ ] Push para o GitHub executado

### Configuração GitHub
- [ ] Repositório existe e está acessível
- [ ] GitHub Pages está habilitado
- [ ] Source está configurado (Actions ou gh-pages branch)

### Verificação Pós-Deploy
- [ ] Site está acessível na URL
- [ ] Todas as páginas carregam
- [ ] Imagens e assets aparecem
- [ ] Formulário funciona
- [ ] Menu funciona
- [ ] Responsivo funciona

---

## 🔧 Comandos Úteis

```bash
# Desenvolvimento local
npm run dev

# Build de produção
npm run build

# Preview da build
npm run preview

# Deploy manual
npm run deploy

# Verificar status do Git
git status

# Ver histórico
git log --oneline

# Push para GitHub
git push origin main
```

---

## 🐛 Troubleshooting

### ❌ Erro: "fatal: not a git repository"

**Solução:**
```bash
git init
git remote add origin https://github.com/avilainc/hamburgueria.git
```

### ❌ Erro: "gh-pages not found"

**Solução:**
```bash
npm install gh-pages --save-dev
```

### ❌ Site não carrega CSS/JS

**Problema:** Base path incorreto

**Solução:**
Verifique se `vite.config.ts` tem:
```typescript
base: '/hamburgueria/'
```

### ❌ 404 no GitHub Pages

**Soluções:**
1. Aguarde 2-3 minutos após o deploy
2. Verifique as configurações em Settings → Pages
3. Force um novo deploy: `git commit --allow-empty -m "Trigger deploy" && git push`

### ❌ GitHub Actions falha

**Soluções:**
1. Verifique a aba Actions no GitHub
2. Confirme que o workflow está correto
3. Verifique permissões em Settings → Actions → General

---

## 🔄 Workflow de Atualizações

### Para Fazer Mudanças e Republicar:

```bash
# 1. Fazer suas modificações nos arquivos

# 2. Testar localmente
npm run dev

# 3. Commit das mudanças
git add .
git commit -m "Descrição das mudanças"

# 4. Push para GitHub
git push origin main

# 5. Deploy automático acontece via GitHub Actions
# OU deploy manual:
npm run deploy
```

---

## 📊 Monitoramento do Deploy

### GitHub Actions (Automático)

1. Acesse: https://github.com/avilainc/hamburgueria/actions
2. Veja o status do workflow "Deploy to GitHub Pages"
3. Aguarde o ✅ verde
4. Acesse seu site!

### Deploy Manual

Após executar `npm run deploy`, você verá:
```
Published
```

Aguarde 2-3 minutos e acesse o site.

---

## 🎨 Configurações Opcionais

### Custom Domain (Domínio Personalizado)

Se você tem um domínio próprio:

1. Crie arquivo `CNAME` na raiz com seu domínio:
```
colibri.com.br
```

2. Configure DNS do seu domínio:
```
Type: CNAME
Name: www
Value: avilainc.github.io
```

3. No GitHub Settings → Pages → Custom domain:
   - Digite seu domínio
   - Clique em Save

### HTTPS

GitHub Pages fornece HTTPS automaticamente! ✅

### Analytics

Adicione Google Analytics editando `index.html`:
```html
<head>
  <!-- ... -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

---

## 📈 Performance

### Verificar Performance

Após deploy, teste em:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Otimizações Aplicadas

- ✅ Vite build otimizado
- ✅ Minificação automática
- ✅ Tree shaking
- ✅ Code splitting
- ✅ Compressão gzip (GitHub Pages)

---

## 🎯 URLs Importantes

| Recurso | URL |
|---------|-----|
| **Site** | https://avilainc.github.io/hamburgueria |
| **Repositório** | https://github.com/avilainc/hamburgueria |
| **Settings** | https://github.com/avilainc/hamburgueria/settings |
| **Pages Config** | https://github.com/avilainc/hamburgueria/settings/pages |
| **Actions** | https://github.com/avilainc/hamburgueria/actions |

---

## 💡 Dicas Finais

### ✨ Boas Práticas

1. **Sempre teste localmente** antes de fazer deploy
2. **Faça commits descritivos** para histórico claro
3. **Use branches** para features grandes
4. **Documente mudanças** importantes
5. **Monitore o Analytics** para insights

### 🚀 Próximos Passos

Após o deploy bem-sucedido:

1. [ ] Compartilhe a URL com a equipe
2. [ ] Configure Google Analytics
3. [ ] Adicione aos seus links sociais
4. [ ] Monitore a performance
5. [ ] Colete feedback dos usuários
6. [ ] Planeje melhorias

---

## 📞 Suporte

### Problemas com GitHub Pages?

- [Documentação Oficial](https://docs.github.com/pages)
- [Troubleshooting Guide](https://docs.github.com/pages/getting-started-with-github-pages/troubleshooting-404-errors)
- [GitHub Community](https://github.community/)

### Problemas com o Site?

Consulte os outros documentos:
- `DEVELOPMENT.md` - Problemas de código
- `DEPLOY.md` - Outras opções de deploy
- `QUICKSTART.md` - Configuração básica

---

## ✅ Resumo Rápido

```bash
# Setup inicial
npm install
git init
git remote add origin https://github.com/avilainc/hamburgueria.git
git add .
git commit -m "🎉 Initial commit"
git push -u origin main

# Aguarde 2-3 minutos
# Acesse: https://avilainc.github.io/hamburgueria

# OU deploy manual:
npm run deploy
```

---

**🎉 Parabéns! Seu site está pronto para o mundo!**

**URL do seu site:** https://avilainc.github.io/hamburgueria

**🚀 Boa sorte com seu projeto!**
