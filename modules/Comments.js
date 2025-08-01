const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Comments = sequelize.define('Comments', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
  type: DataTypes.INTEGER,
  allowNull: false,
  },
  personId: {
  type: DataTypes.INTEGER,
  allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});
