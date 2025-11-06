# Projeto React com Vite — Exemplo de Integração com API

Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento Web, com o objetivo de demonstrar o uso do React, React Router e requisições HTTP (GET e POST).

## Tecnologias Utilizadas

- React (criado com [Vite](https://vitejs.dev/))
- React Router DOM — para navegação entre páginas
- TailwindCSS — para estilização moderna e responsiva
- Fetch API — para consumo de dados HTTP
- JSONPlaceholder API — API pública para simular operações de GET e POST

## Objetivos do Projeto

Criar um projeto React com Vite  
Implementar pelo menos duas rotas (Home e Cadastro)  
Realizar uma requisição GET (listar posts)  
Realizar uma requisição POST (criar um novo post)  
Aplicar estilização personalizada (TailwindCSS)  
Layout organizado, responsivo e funcional  

## Estrutura das Páginas

- Home:  
  Exibe uma lista de posts obtidos da API pública `https://jsonplaceholder.typicode.com/posts`.

- Create:  
  Contém um formulário que envia novos posts para a mesma API, utilizando o método **POST**.  
  A resposta é exibida na tela para confirmar o envio.

- Navbar:  
  Menu superior com links de navegação entre as páginas.

- Footer:  
  Rodapé com informações simples sobre o autor e o ano.

## Como Executar

1. Clone o repositório ou baixe o projeto:
  bash
  git clone https://github.com/arsouzza/Serratec-Dev-Web-React.git

2. Acesse o diretório do projeto: 
  cd my-react-app

3. Instale as dependências: 
  npm install

4. Inicie o servidor de desenvolvimento
  npm run dev

5. Acesse no navegador:
  http://localhost:5173