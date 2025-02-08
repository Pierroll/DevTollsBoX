const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

// Define the suggestion model
const Suggestion = sequelize.define('Suggestion', {
    id_suggestion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    comment: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    }
}, {
    tableName: 'suggestions',  // Table name in the database
    timestamps: false,         // If you are not using createdAt/updatedAt fields
});

module.exports = Suggestion;
