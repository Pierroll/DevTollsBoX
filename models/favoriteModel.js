const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const Tool = require('./toolModel'); // ✅ Importar el modelo Tool

const Favorite = sequelize.define('Favorite', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.STRING, allowNull: false },
    tool_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
    tableName: 'favorites',
    timestamps: false
});

// ✅ Relación: Un favorito pertenece a una herramienta
Favorite.belongsTo(Tool, { foreignKey: 'tool_id', as: 'tool' });

module.exports = Favorite;
