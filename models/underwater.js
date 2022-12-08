'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Underwater extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Underwater.belongsTo(models.Countries, {
        as: 'country',
        foreignKey: 'countryId'
      })
    }
  }
  Underwater.init(
    {
      name: DataTypes.STRING,
      location: DataTypes.STRING,
      details: DataTypes.TEXT,
      imageOne: DataTypes.TEXT,
      imageTwo: DataTypes.TEXT,
      imageThree: DataTypes.TEXT,
      countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        references: {
          model: 'countries',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Underwater',
      tableName: 'underwaters'
    }
  )
  return Underwater
}
