# Ghibli Film Explorer

Aplicação em React para consultar e visualizar filmes do Studio Ghibli através da API pública do projeto Ghibli API.

![Amostra do site](src/assets/test-ghibli.gif)

## Funcionalidades

- Listagem dos filmes disponíveis
- Ordenação por título
- Navegação para os detalhes de cada filme
- Exibição de informações como diretor, produtor, data de lançamento e nota Rotten Tomatoes
- Interface responsiva com React e Vite

## Stack

- React
- TypeScript
- Vite
- React Router DOM
- Tailwind CSS

## Pré-requisitos

- Node.js 18+
- npm

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev
```

A aplicação será iniciada em modo de desenvolvimento no navegador.

## Build

```bash
npm run build
```

## Lint

```bash
npm run lint
```

## Estrutura do projeto

```bash
src/
  components/
  pages/
  services/
  types/
```

Componentes e páginas ficam em arquivos únicos (ex: `FilmCard.tsx`), sem subpastas com `index.tsx` — evita ambiguidade ao abrir várias abas com o mesmo nome de arquivo no editor.

## API utilizada

A aplicação consome a API pública:

```bash
https://ghibliapi.vercel.app/films
```

## Observação

Este projeto foi desenvolvido como desafio de front-end para consumir dados externos e praticar rotas, renderização e integração com APIs.

## Autor

Vitor da Rosa
[GitHub](https://github.com/vturose)
