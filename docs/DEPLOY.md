# Guia de Deploy - Colibri Landing Page

## 📋 Pré-requisitos para Deploy

- Node.js 18+ instalado
- npm ou yarn
- Conta em serviço de hospedagem (Vercel, Netlify, etc.)

## 🚀 Deploy Rápido

### Opção 1: Vercel (Recomendado)

1. Instale a CLI da Vercel:
```bash
npm install -g vercel
```

2. Faça login:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

### Opção 2: Netlify

1. Instale a CLI do Netlify:
```bash
npm install -g netlify-cli
```

2. Faça login:
```bash
netlify login
```

3. Build e deploy:
```bash
npm run build
netlify deploy --prod
```

### Opção 3: GitHub Pages

1. Instale o pacote gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione ao package.json:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  },
  "homepage": "https://seuusuario.github.io/colibri-landing"
}
```

3. Deploy:
```bash
npm run deploy
```

## 🔧 Configuração do Servidor

### Nginx

```nginx
server {
    listen 80;
    server_name colibri.com.br;
    root /var/www/colibri;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
}
```

### Apache (.htaccess)

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 📊 Checklist Antes do Deploy

- [ ] Executar `npm run build` sem erros
- [ ] Testar build localmente com `npm run preview`
- [ ] Verificar todas as imagens e assets
- [ ] Validar formulário de contato
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Verificar links externos
- [ ] Configurar domínio customizado
- [ ] Configurar SSL/HTTPS
- [ ] Testar performance com Lighthouse
- [ ] Verificar SEO básico

## 🔒 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
VITE_API_URL=https://api.colibri.com.br
VITE_CONTACT_EMAIL=contato@colibri.com.br
```

## 📈 Monitoramento

Considere adicionar:
- Google Analytics
- Hotjar ou similar para heatmaps
- Sentry para error tracking
- GTM (Google Tag Manager)

## 🎯 Performance

### Otimizações Aplicadas

- ✅ Minificação automática (Vite)
- ✅ Tree-shaking
- ✅ Code splitting
- ✅ Compressão gzip
- ✅ Lazy loading de componentes

### Métricas Esperadas

- First Contentful Paint: < 1.8s
- Time to Interactive: < 3.8s
- Speed Index: < 3.4s
- Lighthouse Score: > 90

## 🐛 Troubleshooting

### Build falha
```bash
# Limpar cache e reinstalar
rm -rf node_modules dist
npm install
npm run build
```

### Rotas não funcionam
- Verifique configuração do servidor
- Confirme que index.html está sendo servido para todas as rotas

### Assets não carregam
- Verifique paths relativos
- Confirme que a pasta `dist` foi deployada corretamente

## 📞 Suporte

Para problemas de deploy:
- Documentação Vite: https://vitejs.dev/guide/static-deploy
- Documentação Vercel: https://vercel.com/docs
- Documentação Netlify: https://docs.netlify.com
