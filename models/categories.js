'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Categories.hasMany(models.Articles)
    }
  };
  Categories.init({
    name: DataTypes.STRING,
    is_deleted: DataTypes.TINYINT
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};