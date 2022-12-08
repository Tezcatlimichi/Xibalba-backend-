'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fuanas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      scientificName: {
        type: Sequelize.STRING
      },
      commonName: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.TEXT
      },
      whoTheyAre: {
        type: Sequelize.TEXT
      },
      whereToFind: {
        type: Sequelize.TEXT
      },
      protect: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('fuanas');
  }
};