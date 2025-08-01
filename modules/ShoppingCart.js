const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const ShoppingCart = sequelize.define('ShoppingCart', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
  type: DataTypes.INTEGER,
  allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
});
