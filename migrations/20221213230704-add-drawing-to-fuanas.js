'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('fuanas', 'drawing', {
      type: Sequelize.TEXT
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('fuanas', 'drawing')
  }
}
