'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('payment', {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('payment')
  },
}
