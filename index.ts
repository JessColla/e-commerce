import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

// Defina seus modelos Sequelize aqui
// Exemplo:
// import { Model, DataTypes } from 'sequelize-typescript';
//
// class User extends Model {
//   // Defina suas colunas e métodos aqui
// }
//
// sequelize.addModels([User]);

// Realize suas operações com o Sequelize

async function main() {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');

    // Execute suas operações aqui
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
}

main();
