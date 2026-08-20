# Econverse - E-commerce Landing Page

Teste técnico para a vaga de Estágio Front-end na Econverse.

Projeto desenvolvido com foco em componentização, responsividade e fidelidade ao design (Pixel Perfect), baseado em um protótipo do Figma. Trata-se de uma landing page completa para um e-commerce, incluindo vitrines de produtos com consumo de API, modais interativos e seções institucionais.

## Deploy

[https://teste-frontend-felipe-augusto.vercel.app/](https://teste-frontend-felipe-augusto.vercel.app/)

## Lighthouse

| Métrica        | Score |
| -------------- | ----- |
| Performance    | 99    |
| Accessibility  | 100   |
| Best Practices | 100   |
| SEO            | 100   |

## Tecnologias

- **React 19** com **Vite** para build e dev server
- **TypeScript** em modo strict (`noUncheckedIndexedAccess`, `noImplicitReturns`, `forceConsistentCasingInFileNames`)
- **SASS (SCSS)** com metodologia **BEM**, mobile-first
- **Vitest** + **Testing Library** para testes unitários e de componente
- **Playwright** para testes E2E (Chromium desktop + mobile)
- **ESLint** (flat config) + **Prettier**
- **Husky** + **lint-staged** + **commitlint** (Conventional Commits obrigatório)
- **GitHub Actions** para CI (format, lint, typecheck, build, testes unitários, E2E)

## Funcionalidades

- **Vitrine de produtos**: consumo de API REST, cards com preço, parcelamento e frete grátis
- **Modal de produto**: `<dialog>` nativo do HTML com foco automático, fechamento por Esc, clique fora ou botão, sem focus trap manual — comportamento delegado ao navegador
- **Header responsivo**: topbar informativa, busca, navegação por categorias
- **Hero, categorias, banners de parceiros, marcas e newsletter**: seções compostas a partir de dados tipados em `src/data/`
- **Responsividade mobile-first**: 2 breakpoints (`768px` tablet, `1280px` desktop)
- **Acessibilidade**: labels associados a inputs, `aria-label` em ícones interativos, `alt` decorativo (`aria-hidden`) onde o texto adjacente já veicula a informação, contraste AA em todos os tokens de cor, landmark `<main>`

## Como executar

```
git clone https://github.com/felipedev90/teste-front-end.git
cd teste-front-end
npm install
npm run dev
```

Acesse `http://localhost:5173`.

### Scripts disponíveis

```
npm run dev # dev server
npm run build # build de produção
npm run preview # preview do build
npm run lint # ESLint
npm run format # Prettier (escreve)
npm run format:check # Prettier (só verifica)
npm run typecheck # tsc --noEmit
npm run test # testes unitários/componente (Vitest)
npm run test:e2e # testes E2E (Playwright, sobe o dev server automaticamente)
```

## Decisões técnicas

**Vite em vez de Next.js**: o enunciado exige pré-processador CSS (SASS/Less/Stylus) e proíbe bibliotecas de UI. Next.js/Tailwind não fariam sentido aqui, Vite + React + SASS é a stack que atende literalmente ao que foi pedido, sem overhead de SSR para uma landing page single-page.

**Adapter na camada de fetch**: a API consumida não retorna `id` por produto. `src/services/productFetch.ts` gera um `id` estável via slug do `productName` e nunca expõe o shape cru da API (`ProductApiResponse`) ao resto do app, os componentes só conhecem o tipo de domínio `Product`.

**Proxy para contornar CORS**: a API consumida (`app.econverse.com.br`) não libera CORS para outras origens, uma chamada `fetch` direta do navegador é bloqueada antes mesmo de a resposta chegar. A solução precisa de duas camadas, porque dev e produção rodam em ambientes diferentes:

- **Desenvolvimento**: `vite.config.ts` usa `server.proxy` para reescrever `/api/*` e repassar a chamada servidor-a-servidor (o dev server do Vite, rodando em Node, faz a requisição por trás, CORS só existe entre navegador e servidor, não entre dois servidores).
- **Produção**: não existe dev server em produção, então o mesmo problema reaparece no primeiro deploy. `vercel.json` resolve com `rewrites`, fazendo a infraestrutura da Vercel repassar `/api/*` para a API real, mesma estratégia, camada diferente.

O frontend nunca chama a URL da API diretamente em nenhum ambiente — sempre via `/api/...` relativo, deixando a camada de infraestrutura (Vite ou Vercel) resolver o CORS de forma transparente.

**`<dialog>` nativo no modal**: em vez de simular um modal com `<div>` + JS customizado, o `ProductModal` usa `.showModal()`/`.close()` do elemento `<dialog>` real. O navegador cuida de focus trap, `::backdrop` e fechamento por Esc: menos JavaScript para manter, mais garantias de acessibilidade.

**Estrutura de pastas**: `components/layout` (Header, Footer, persistentes entre páginas), `components/sections` (composições específicas da página), `components/ui` (primitivos reutilizáveis como ProductCard, QuantitySelector). Dados estáticos (`data/`) nunca importam de bibliotecas de UI.

**Mobile-first com 2 breakpoints**: `768px` (tablet) e `1280px` (desktop). O valor de 1280px foi calibrado experimentalmente, abaixo disso, elementos com largura mínima fixa (como o campo de busca do Header) quebravam o layout.

**SPA sem SSR, SEO adaptado**: como não há servidor próprio, as convenções do Next.js (`sitemap.ts`, `robots.ts`, `opengraph-image.tsx`) não se aplicam. O equivalente correto é: meta tags estáticas em `index.html`, `sitemap.xml`/`robots.txt` estáticos em `public/`, e uma imagem OG estática.

## Estrutura do projeto

```
src/
├── assets/
│ ├── icons/ # Ícones (SVG e WebP, otimizados)
│ └── images/ # Imagens (hero, parceiros)
├── components/
│ ├── layout/ # Header, Footer — persistentes entre páginas
│ ├── sections/ # Composições específicas (Hero, Categories, ProductShowcase...)
│ └── ui/ # Primitivos reutilizáveis (ProductCard, ProductModal, QuantitySelector)
├── data/ # Dados estáticos tipados (sem imports de UI)
├── hooks/ # Custom hooks (useProducts)
├── services/ # Camada de fetch/adapter
├── styles/ # Design tokens (_variables, _mixins, _breakpoints)
├── test/ # Setup do Vitest
├── types/ # Tipos de domínio
├── utils/ # Funções puras (formatPrice, slugify)
├── App.tsx
└── main.tsx

e2e/ # Testes Playwright
```

## Testes

**Unitários e de componente** (Vitest + Testing Library): cobrem lógica de formatação, geração de slug, comportamento de interação (clique, incremento/decremento), acessibilidade (labels associados, `aria-*`), e renderização condicional.

**E2E** (Playwright): fluxo de carregamento da vitrine e abertura/fechamento do modal de produto, rodando em Chromium desktop e mobile.

## CI/CD

Pipeline no GitHub Actions com dois jobs: `quality-checks` (format, lint, typecheck, build, testes unitários) e `e2e` (Playwright), este último condicionado ao sucesso do primeiro. Branch protection em `main` e `develop` exige PR + CI verde antes de merge.

## Fluxo de Git

`main` (produção) ← `develop` (integração) ← branches `feat/*`/`fix/*`/`chore/*`/`test/*`.

- **Uma responsabilidade por branch**, PR obrigatório, squash merge
- **Conventional Commits** com escopo obrigatório em kebab-case (`feat(header): add search bar`)
- **Branch protection** em `main` e `develop`: push direto bloqueado, PR + CI verde exigidos antes de merge, branch precisa estar atualizada com a base
- **Husky + commitlint** bloqueiam localmente qualquer commit fora do padrão antes mesmo de chegar no CI

## Desenvolvedor

Felipe Augusto da Silva

- [LinkedIn](https://linkedin.com/in/felipesilva90)
- [GitHub](https://github.com/felipedev90)
- [Portfólio](https://devfelipeaugusto.com.br)
