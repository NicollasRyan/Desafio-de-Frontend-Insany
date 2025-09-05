# 🛍️ InsanyShop

Uma aplicação de e-commerce moderna construída com Next.js, React e Material-UI, oferecendo uma experiência de compras intuitiva e responsiva.

## ✨ Funcionalidades

- 🏠 **Página inicial** com listagem de produtos
- 🔍 **Busca avançada** com autocomplete
- 🛒 **Carrinho de compras** interativo
- 📱 **Design responsivo** para desktop e mobile
- 🎨 **Interface moderna** com Material-UI
- ⚡ **Performance otimizada** com Next.js
- 💫 **Estados de loading** com Skeleton components

## 🚀 Tecnologias Utilizadas

- **Next.js 15.5.2** - Framework React para produção
- **React 19.1.0** - Biblioteca para interfaces de usuário
- **Material-UI 7.3.1** - Componentes de interface
- **TypeScript 5** - Tipagem estática
- **Styled Components** - CSS-in-JS
- **Emotion** - Biblioteca de CSS-in-JS

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 🛠️ Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd insanyshop
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abra o navegador**
   Acesse [http://localhost:3000](http://localhost:3000) para visualizar a aplicação.

## 📱 Estrutura do Projeto

```
src/
├── app/                    # Páginas da aplicação (App Router)
│   ├── cart/              # Página do carrinho
│   ├── category/          # Página de categorias
│   ├── home/              # Página inicial
│   ├── product/           # Página de produto
│   └── layout.tsx         # Layout principal
├── components/            # Componentes reutilizáveis
│   ├── CardCart/          # Card do carrinho
│   ├── CardList/          # Card de produto
│   ├── CardListSkeleton/  # Skeleton loading
│   ├── Header/            # Cabeçalho
│   ├── OrderSummary/      # Resumo do pedido
│   └── SearchAutocomplete/ # Busca com autocomplete
├── contexts/              # Contextos React
│   └── CartContext.tsx    # Contexto do carrinho
└── styles/                # Estilos globais
    └── global.ts
```

## 🎨 Componentes Principais

### Header
- Nome da aplicação "InsanyShop"
- Busca com autocomplete
- Badge do carrinho
- Layout responsivo (mobile/desktop)

### CardList
- Exibição de produtos
- Informações: nome, categoria, preço, rating
- Botão de adicionar ao carrinho
- Design responsivo

### CardCart
- Visualização de itens no carrinho
- Controle de quantidade
- Remoção de itens
- Layout adaptativo

### CardListSkeleton
- Estado de loading
- Simula a estrutura do CardList
- Animação de pulse

## 📱 Responsividade

A aplicação é totalmente responsiva, adaptando-se a diferentes tamanhos de tela:

- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Layout intermediário
- **Mobile**: Layout em coluna única com ajustes específicos

### Breakpoints
- Mobile: `max-width: 768px`
- Tablet: `768px - 1024px`
- Desktop: `1024px+`

## 🛒 Funcionalidades do Carrinho

- ✅ Adicionar produtos
- ✅ Remover produtos
- ✅ Alterar quantidades
- ✅ Persistência no localStorage
- ✅ Cálculo automático de totais
- ✅ Validação de estoque

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm run start
```

## 🌐 Páginas

- **/** - Página inicial com listagem de produtos
- **/cart** - Carrinho de compras
- **/category/[category]** - Produtos por categoria
- **/product/[id]** - Detalhes do produto


## 👨‍💻 Desenvolvedor

Desenvolvido com ❤️ para demonstrar habilidades em React, Next.js e desenvolvimento de interfaces modernas.

---

**InsanyShop** - Sua loja online moderna e responsiva! 🛍️✨