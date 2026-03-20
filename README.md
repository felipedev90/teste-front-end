# Econverse - E-commerce Landing Page

Teste técnico para a vaga de Desenvolvedor Front-end na Econverse.

Projeto desenvolvido com foco em componentização, responsividade e fidelidade ao design (Pixel Perfect), baseado em um protótipo do Figma. Trata-se de uma landing page completa para um e-commerce, incluindo vitrines de produtos com consumo de API, modais interativos e seções institucionais.

## Deploy

[Ver projeto online](https://econverse-frontendtest.vercel.app/)

## Lighthouse

![Lighthouse Scores](/public/lighthouse_results.jpg)

| Métrica        | Score |
| -------------- | ----- |
| Performance    | 93    |
| Accessibility  | 94    |
| Best Practices | 100   |
| SEO            | 100   |

## Tecnologias Utilizadas

- **React 19** com **Vite** para build e dev server
- **TypeScript** para tipagem estática
- **SASS (SCSS)** para estilização com pré-processador
- **Metodologia BEM** para arquitetura de CSS escalável
- **Vitest + Testing Library** para testes automatizados
- **GitHub Actions** para CI (lint, testes e build)
- **Husky + lint-staged** para validação pré-commit

## Funcionalidades

- **Vitrine de Produtos:** Consumo de API REST com dados em JSON, exibindo cards de produtos com preço, parcelas e frete grátis.
- **Modal de Produto (Quick View):** Ao clicar em um produto, abre um modal com imagem, nome, preço, descrição, seletor de quantidade e botão de compra.
- **Header Responsivo:** Topbar informativa, barra de busca, ícones de ação e navegação por categorias.
- **Hero Banner:** Seção de destaque com background dinâmico e call-to-action.
- **Categorias:** Grid de ícones com estado ativo e hover.
- **Banners de Parceiros:** Cards com máscara de gradiente sobre imagem de fundo.
- **Navegue por Marcas:** Grid de logotipos circulares com efeitos de hover.
- **Newsletter:** Formulário de captura com inputs e checkbox de termos.
- **Footer:** Colunas de links institucionais, redes sociais e copyright.
- **Responsividade:** Layout adaptado para desktop (1440px), tablet (768px) e mobile (480px).

## Testes

O projeto conta com testes automatizados utilizando Vitest e Testing Library:

- **Testes unitários:** Validação da função `formatPrice` (formatação de valores em centavos para Real).
- **Testes de componente:** `ProductCard` (renderização de nome, preço e imagem) e `ProductModal` (renderização de conteúdo e interação do botão de fechar).

Para executar os testes:

```bash
npm test
```

## Decisões Técnicas

- **Vite em vez de CRA:** Create React App foi descontinuado. Vite é o bundler padrão atual da comunidade React, com dev server mais rápido (ESBuild) e builds menores.
- **SASS com BEM:** SASS é o pré-processador mais utilizado no mercado de e-commerce (VTEX usa SASS). BEM garante organização e escalabilidade do CSS.
- **Proxy no Vite:** Configurado `server.proxy` no `vite.config.ts` para contornar CORS da API em ambiente de desenvolvimento, sem depender de extensões ou configurações externas.
- **Lifting State Up:** Estado do produto selecionado gerenciado no `App.tsx`, permitindo que qualquer card em qualquer vitrine abra o mesmo modal. Um único estado (`selectedProduct`) controla tanto a visibilidade quanto o conteúdo do modal.
- **Separação de responsabilidades:** Service isolado para fetch da API (`services/`), tipos centralizados (`types/`), utilitários de formatação (`utils/`) e componentes focados em renderização.
- **Componente reutilizável:** `ProductShowcase` aceita prop opcional `tabs`, com tabs renderiza abas de categorias, sem tabs renderiza "Ver todos". Um componente atende as duas variações do layout.
- **CI/CD:** Pipeline no GitHub Actions executa lint, testes e build a cada push na main. Husky + lint-staged validam o código antes de cada commit.

## Estrutura do Projeto

```
src/
├── assets/
│   ├── icons/             # Ícones SVG exportados do Figma
│   └── images/            # Imagens (hero banner, parceiros)
├── components/
│   ├── Header/            # Topbar + barra principal + navegação
│   ├── HeroBanner/        # Banner principal com CTA
│   ├── Categories/        # Grid de categorias com ícones
│   ├── ProductShowcase/   # Vitrine de produtos (com/sem tabs)
│   ├── ProductCard/       # Card individual do produto
│   ├── ProductModal/      # Modal de detalhes do produto
│   ├── PartnersBanners/   # Seção de banners parceiros
│   ├── PartnerCard/       # Card individual de parceiro
│   ├── Brands/            # Seção "Navegue por marcas"
│   ├── Newsletter/        # Formulário de newsletter
│   └── Footer/            # Footer com links e redes sociais
├── services/
│   └── productFetch.ts    # Função de fetch da API de produtos
├── types/
│   └── Product.ts         # Interfaces TypeScript (Product, ApiResponse)
├── utils/
│   └── utils.ts           # Funções utilitárias (formatPrice)
├── styles/
│   ├── _variables.scss    # Cores, fontes, espaçamentos, sombras
│   ├── _mixins.scss       # Mixins reutilizáveis (container, flex-center, button-base)
│   └── _breakpoints.scss  # Breakpoints para responsividade
├── test/
│   └── setupTests.ts      # Configuração do ambiente de testes
└── App.tsx                # Componente raiz com gerenciamento de estado
```

## Como Executar

```bash
git clone https://github.com/felipedev90/econverse-frontend-test.git
cd econverse-frontend-test
npm install
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## Contato

**Felipe Augusto da Silva**

- [LinkedIn](https://linkedin.com/in/felipesilva90)
- [GitHub](https://github.com/felipedev90)
- [Portfólio](https://felipe-silva90-portfolio.vercel.app)
