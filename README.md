# Product Management App

Uma aplicação web moderna desenvolvida em React com Vite para gerenciar produtos com funcionalidades de CRUD (Criar, Ler, Atualizar, Deletar), menu de navegação e testes E2E com Cypress.

## 🎯 Funcionalidades

- **Listagem de Produtos**: Visualize todos os produtos em uma tabela organizada
- **Criar Produtos**: Adicione novos produtos com nome, preço e categoria
- **Editar Produtos**: Modifique as informações de produtos existentes
- **Excluir Produtos**: Remova produtos que não são mais necessários
- **Navegação**: Menu com links para "Produtos" e "Sobre"
- **Página Sobre**: Informações sobre a aplicação e tecnologias utilizadas

## 🛠 Tecnologias Utilizadas

- **React 19**: Biblioteca para construção da interface
- **Vite**: Ferramenta de build rápida e moderna
- **Tailwind CSS 4**: Framework de CSS utilitário
- **TypeScript**: Tipagem estática para JavaScript
- **Wouter**: Roteamento client-side leve
- **shadcn/ui**: Componentes UI reutilizáveis
- **Cypress**: Testes E2E automatizados

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ou superior
- npm, yarn ou pnpm

### Passos

1. **Clone o repositório** (ou extraia os arquivos):
   ```bash
   git clone <url-do-repositorio>
   cd product-management-app
   ```

2. **Instale as dependências**:
   ```bash
   pnpm install
   # ou
   npm install
   # ou
   yarn install
   ```

## 🚀 Execução

### Modo Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
pnpm dev
# ou
npm run dev
# ou
yarn dev
```

A aplicação estará disponível em `http://localhost:3000/`

### Build para Produção

Para criar uma build otimizada:

```bash
pnpm build
# ou
npm run build
# ou
yarn build
```

### Preview da Build

Para visualizar a build de produção:

```bash
pnpm preview
# ou
npm run preview
# ou
yarn preview
```

## 🧪 Testes E2E com Cypress

### Executar Todos os Testes

```bash
pnpm test:e2e
# ou
npm run test:e2e
# ou
yarn test:e2e
```

### Abrir Interface do Cypress

```bash
pnpm test:e2e:open
# ou
npm run test:e2e:open
# ou
yarn test:e2e:open
```

### Executar Testes Específicos

```bash
# Testes de Criação de Produto (RT1)
pnpm exec cypress run --spec "cypress/e2e/product-creation.cy.ts"

# Testes de Edição de Produto (RT2)
pnpm exec cypress run --spec "cypress/e2e/product-editing.cy.ts"

# Testes de Exclusão de Produto (RT3)
pnpm exec cypress run --spec "cypress/e2e/product-deletion.cy.ts"

# Testes de Navegação (RT4)
pnpm exec cypress run --spec "cypress/e2e/navigation.cy.ts"
```

## 📋 Cobertura de Testes

A aplicação possui testes E2E cobrindo os seguintes cenários:

### RT1 - Fluxo de Criação de Produto
- ✅ Criar um novo produto com sucesso
- ✅ Validar campos obrigatórios
- ✅ Cancelar criação sem salvar

### RT2 - Fluxo de Edição de Produto
- ✅ Editar um produto com sucesso
- ✅ Editar apenas o preço
- ✅ Editar a categoria
- ✅ Cancelar edição sem salvar

### RT3 - Fluxo de Exclusão de Produto
- ✅ Excluir um produto com sucesso
- ✅ Cancelar exclusão
- ✅ Excluir múltiplos produtos

### RT4 - Fluxo de Navegação
- ✅ Navegar para página "Sobre" e voltar
- ✅ Manter menu visível em ambas as páginas
- ✅ Indicar página ativa no menu

**Total de Testes**: 13 testes E2E, todos passando ✅

## 🏗 Estrutura do Projeto

```
product-management-app/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   │   ├── Navigation.tsx
│   │   │   ├── ProductList.tsx
│   │   │   └── ProductForm.tsx
│   │   ├── contexts/        # Contextos React
│   │   │   └── ProductContext.tsx
│   │   ├── pages/           # Páginas da aplicação
│   │   │   ├── Products.tsx
│   │   │   └── About.tsx
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entrada da aplicação
│   │   └── index.css        # Estilos globais
│   └── index.html           # HTML principal
├── cypress/
│   ├── e2e/                 # Testes E2E
│   │   ├── product-creation.cy.ts
│   │   ├── product-editing.cy.ts
│   │   ├── product-deletion.cy.ts
│   │   └── navigation.cy.ts
│   └── support/             # Configuração do Cypress
├── cypress.config.ts        # Configuração do Cypress
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
└── README.md                # Este arquivo
```

## 🎨 Design

A aplicação segue os princípios de **Minimalismo Corporativo Sofisticado**, com:

- Paleta de cores profissional (azul profundo #1E3A8A como primária)
- Tipografia clara com Poppins para títulos e Inter para corpo
- Layout limpo e organizado com espaçamento generoso
- Componentes com feedback visual claro
- Transições suaves e microinterações

## 📝 Dados

Os dados de produtos são armazenados em memória (estado React). A aplicação inicia com três produtos de exemplo:

- Laptop - R$ 1200.00 - Eletrônicos
- Mouse - R$ 25.00 - Periféricos
- Teclado - R$ 75.00 - Periféricos

## 🔍 Atributos de Teste (data-testid)

Todos os elementos-chave possuem atributos `data-testid` para facilitar os testes E2E:

- `create-product-button` - Botão de criar produto
- `product-row` - Linha de produto na tabela
- `edit-product-button` - Botão de editar
- `delete-product-button` - Botão de excluir
- `product-name-input` - Campo de nome
- `product-price-input` - Campo de preço
- `product-category-input` - Campo de categoria
- `save-product-button` - Botão de salvar
- `cancel-product-button` - Botão de cancelar
- `menu-products` - Item de menu "Produtos"
- `menu-about` - Item de menu "Sobre"

## 🚀 Deploy

A aplicação pode ser facilmente deployada em plataformas como Vercel, Netlify, ou qualquer servidor que suporte aplicações Node.js/Static.

### Vercel

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 📄 Licença

MIT

## 👨‍💻 Desenvolvedor

Desenvolvido como uma aplicação de demonstração de CRUD com React, Vite e Cypress.

---

**Última atualização**: 17 de março de 2026
