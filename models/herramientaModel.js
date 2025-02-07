const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

// Definir el modelo de herramienta
const Herramienta = sequelize.define('Herramienta', {
    id_herramienta: {
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
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,  // Puede ser nulo
    },
    categoria: {
        type: DataTypes.STRING(50),
        allowNull: true,  // Puede ser nulo
    },
    calificacion: {
        type: DataTypes.DECIMAL(2, 1),  // Tipo NUMERIC en PostgreSQL
        allowNull: true,  // Puede ser nulo
    },
    fecha_de_publicacion: {
        type: DataTypes.DATE,
        allowNull: true,  // Puede ser nulo
    },
    imagen: {
        type: DataTypes.STRING(255),
        allowNull: true,  // Puede ser nulo
    }
}, {
    tableName: 'herramientas', // Nombre de la tabla en la base de datos
    timestamps: false,         // Si no usas campos de fecha como createdAt/updatedAt
});

module.exports = Herramienta;
