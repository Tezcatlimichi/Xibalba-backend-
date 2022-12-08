'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Countries.hasMany(models.Underwater, { foreignKey: 'countryId' })
      Countries.hasMany(models.Cave, { foreignKey: 'countryId' })
    }
  }
  Countries.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Countries',
      tableName: 'countries'
    }
  )
  return Countries
}
