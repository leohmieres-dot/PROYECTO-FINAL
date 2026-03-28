const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const List = sequelize.define('List', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  order: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

module.exports = List;