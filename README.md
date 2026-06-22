# Colégio da Família

Landing page institucional do Colégio da Família, desenvolvida com React, TypeScript, Vite e Tailwind CSS.

## Rodar localmente

```bash
pnpm install
pnpm run dev
```

## Gerar build

```bash
pnpm run build
```

O build final é gerado na pasta `dist`.

## Publicar na Netlify

- Build command: `pnpm run build`
- Publish directory: `dist`

O arquivo `public/_redirects` garante que as páginas internas de artigos funcionem ao acessar a URL diretamente na Netlify.
