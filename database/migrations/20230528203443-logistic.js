"use strict";

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("payment", {
      idPayments: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      idRequest: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      idClient: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      payment_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      payment_amount: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2),
      },
      payment_method: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      payment_status: {
        allowNull: false,
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("payment");
  },
};
