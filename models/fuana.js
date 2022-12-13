'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Fuana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fuana.init(
    {
      scientificName: DataTypes.STRING,
      commonName: DataTypes.STRING,
      image: DataTypes.TEXT,
      whoTheyAre: DataTypes.TEXT,
      whereToFind: DataTypes.TEXT,
      protect: DataTypes.TEXT,
      year: DataTypes.STRING,
      drawing: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Fuana',
      tableName: 'fuanas'
    }
  )
  return Fuana
}
