<h4 align="center"> 
	🚧 Projeto em construção 🚧
</h4>

# E-commerce Platform - Node.js

Este é um projeto de exemplo para uma plataforma de e-commerce desenvolvida em Node.js. A plataforma permite a exibição e compra de produtos, gerenciamento de clientes, processamento de pedidos e muito mais.

## 🎨 Layout

<h3 align="center"> 
	🚧 Em construção 🚧
</h3>

## 🛠 Tecnologias Utilizadas

#### **Server** ([NodeJS](https://nodejs.org/en/))

- **[Express](https://expressjs.com/)**
- **[Sequelize](https://sequelize.org/api/v6/identifiers)**
- **[mysql2](https://github.com/sidorares/node-mysql2)**
- **[dotENV](https://github.com/motdotla/dotenv)**
- **[Joi](https://github.com/hapijs/joi)**
- **[Mocha](https://mochajs.org/)**

## 🚀 Configuração do Projeto

1. Clone este repositório para sua máquina local.
2. Certifique-se de ter o Node.js e o MySQL instalados em seu sistema.
3. Execute o comando `npm install` para instalar todas as dependências do projeto.
4. Configure as informações de conexão com o banco de dados no arquivo `config/database.js`.
5. Execute as migrations para criar as tabelas no banco de dados, utilizando o comando `npx sequelize-cli db:migrate`.
6. Execute o comando `npm start` para iniciar o servidor Node.js.
7. Acesse a plataforma no navegador através do endereço `http://localhost:3000`.

## Estrutura do Projeto

- `app.js`: arquivo principal do projeto, configura o servidor Express.js.
- `config/`: pasta contendo arquivos de configuração, como as configurações de banco de dados.
- `routes/`: pasta contendo as rotas da aplicação, que mapeiam as requisições HTTP para os controladores.
- `controllers/`: pasta contendo os controladores da aplicação,responsáveis pelos parâmetros das requisições.
- `servers/`: pasta contendo os services da aplicação,responsáveis pela lógica de negócio.
- `reposotories/`:pasta contendo os repositórios da aplicação,responsáveis pelas queries.
- `models/`: pasta contendo os modelos do Sequelize, que representam as tabelas do banco de dados.
- `constants/`: pasta contendo os constantes utilizadas em diversas partes da aplicação.
- `migrations/`: pasta contendo as migrations do Sequelize, utilizadas para criar as tabelas e alterações no banco de dados.

## 💻 Contribuição

Sinta-se à vontade para contribuir com melhorias neste projeto. Se você encontrar problemas ou tiver sugestões, abra uma nova issue aqui no repositório.

## Licença

Este projeto está licenciado sob a licença [MIT](https://opensource.org/licenses/MIT).
