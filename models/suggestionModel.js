const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Suggestion = sequelize.define('Suggestion', {
    id_suggestion: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    link: { type: DataTypes.STRING },
    comment: { type: DataTypes.TEXT },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, {
    tableName: 'suggestions',
    timestamps: false
});

module.exports = Suggestion;
