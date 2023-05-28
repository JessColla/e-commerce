"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("client", {
      idClient: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cpf: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      telephone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      birthday: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      registration_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      users_idUser: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "idUser",
        },
      },
      users_password: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "users",
          key: "password",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("client");
  },
};

("use strict");
