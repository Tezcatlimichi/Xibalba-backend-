'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('caves', 'profileId', {
      type: Sequelize.INTEGER
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('caves', 'profileId')
  }
}
