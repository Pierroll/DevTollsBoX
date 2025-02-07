const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

// Definir el modelo de sugerencia
const Sugerencia = sequelize.define('Sugerencia', {
    id_sugerencia: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    link: {
        type: DataTypes.STRING(255),
        allowNull: true,  // Puede ser nulo
    },
    comentario: {
        type: DataTypes.TEXT,
        allowNull: true,  // Puede ser nulo
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: true,  // Puede ser nulo
    }
}, {
    tableName: 'sugerencias',  // Nombre de la tabla en la base de datos
    timestamps: false,         // Si no usas campos de fecha como createdAt/updatedAt
});

module.exports = Sugerencia;
