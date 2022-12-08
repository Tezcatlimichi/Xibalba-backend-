'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Cave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cave.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      details: DataTypes.TEXT,
      imageOne: DataTypes.TEXT,
      imageTwo: DataTypes.TEXT,
      imageThree: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Cave',
      tableName: 'caves'
    }
  )
  return Cave
}
