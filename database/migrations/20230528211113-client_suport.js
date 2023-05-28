"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("client_suport", {
      idClient_suport: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idClient: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      message: {
        allowNull: false,
        type: Sequelize.TEXT,
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
    await queryInterface.dropTable("client_suport");
  },
};
