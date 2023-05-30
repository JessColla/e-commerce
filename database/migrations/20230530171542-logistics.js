'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('logistic', {
      idLogistic: {
        allowNull: false,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      idClient: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      shipping_date: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      shipping_method: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      shipping_address: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      request_status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tracking_number: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      idProduct: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      product_quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      idRequest: {
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
    await queryInterface.dropTable('logistic')
  },
}
;('use strict')
