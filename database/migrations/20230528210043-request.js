"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("request", {
      idRequest: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idClient: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      idShopping_cart: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Client_idClient: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "client",
          key: "idClient",
        },
      },
      Client_Users_idUser: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "client",
          key: "Users_idUser",
        },
      },
      Client_Users_password: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: "client",
          key: "Users_password",
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
    await queryInterface.dropTable("request");
  },
};
