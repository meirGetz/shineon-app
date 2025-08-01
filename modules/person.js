const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Person = sequelize.define('Person', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
  type: DataTypes.INTEGER,
  allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z ]{1,50}$/,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      is: /^[a-zA-Z ]{1,50}$/,
    },
  },
  birthYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1000,
      max: new Date().getFullYear(),
    },
  },
  deathYear: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      min: 1000,
      max: new Date().getFullYear(),
    },
  },
  lifeStory: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});
