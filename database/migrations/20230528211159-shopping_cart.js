"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("shopping_cart", {
      idShopping_cart: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idProduct: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      idRequest: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      Requests_idRequest: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "request",
          key: "idRequest",
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
    await queryInterface.dropTable("shopping_cart");
  },
};
