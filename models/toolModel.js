const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

// Define the tool model
const Tool = sequelize.define('Tool', {
    id_tool: {
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
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    rating: {
        type: DataTypes.DECIMAL(2, 1),  // NUMERIC type in PostgreSQL
        allowNull: true,
    },
    publication_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING(255),
        allowNull: true,
    }
}, {
    tableName: 'tools', // Table name in the database
    timestamps: false,  // If you are not using createdAt/updatedAt fields
});

module.exports = Tool;
