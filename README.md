# Desafio Técnico - SWFAST

## Descrição

Este projeto foi desenvolvido como parte de um desafio técnico, com o objetivo de demonstrar habilidades práticas em desenvolvimento de aplicações front-end. A proposta consiste na construção de uma interface web utilizando Angular, focada na gestão de tarefas do dia a dia.

A aplicação permite ao usuário criar, visualizar, atualizar e excluir tarefas, com informações como título, descrição e data de conclusão prevista. As tarefas são listadas de forma organizada por status (pendentes e concluídas), e o status pode ser alterado conforme a necessidade do usuário.

Este projeto consome uma API desenvolvida em C# com banco de dados Microsoft SQL Server, conforme especificado no desafio, e está disponível publicamente no [GitHub](https://github.com/Diego-veiga/TaskManagerAPI) para avaliação.



# Tabela de conteúdos

<!--ts-->

- [Pré-requisitos](#requisito)
- [Execução do projeto](#execucao)
- [Funcionalidades](#funcionalidade)
- [Tecnologias](#tecnologias)
- [Autor](#autor)
<!--te-->

<h2 id="requisito">Pré-requisitos</h2>
Para rodar a aplicação, você precisará ter instalado na sua máquina:

- **Node.js** na versão 20.19.1 ou superior. Caso ainda não tenha, você pode baixar e instalar através do site [Node](https://nodejs.org/pt/download)

- **Angular CLI** na versão 17. Se ainda não estiver instalado, utilize o comando abaixo para instalar globalmente:
```bash
 npm install -g @angular/cli@17
```

<h2 id="execucao">Execução do projeto</h2>

Para executar o projeto, siga os seguintes passos:

#### Clone o projeto

    Repositório https://github.com/Diego-veiga/TaskApp


### Execução 

#### Instale as dependências

```bash
npm i
```
#### Inicie a aplicação:

```bash
npm run start
```
Ou
```bash
ng serve -o
```
A aplicação será aberta automaticamente no navegador no endereço `http://localhost:4200`. Caso isso não ocorra, você pode copiar e colar essa URL manualmente no navegador para acessar a aplicação.

<h2 id="funcionalidade">Funcionalidades</h2>

- ✅ Criar novas tarefas com título, descrição e data prevista de conclusão<br> 
- 📋 Listar tarefas separadas por status: pendentes e concluídas<br> 
- 🔄 Alterar status de uma tarefa entre pendente e concluída<br> 
- 🗑️ Excluir tarefas<br> 

## Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Angular](https://angular.dev/)
- [Angular Material](https://material.angular.dev/)
- [Typescript](https://www.typescriptlang.org/docs/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

## Autor

<a href="https://www.linkedin.com/in/diegorobertoveiga/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62670446?s=400&u=ce360c7bc3872fde7996a64a630c3a44ecb1ed30&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Diego Veiga</b></sub></a> <a href="https://www.linkedin.com/in/diegorobertoveiga/" title="Diego Veiga">🚀</a>
