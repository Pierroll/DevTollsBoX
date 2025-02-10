const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Category = sequelize.define('Category', {
    id_category: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false }
}, {
    tableName: 'categories',
    timestamps: false
});

module.exports = Category;
