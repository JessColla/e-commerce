'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('shopping_cart', {
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('shopping_cart')
  },
}
