const { Sequelize } = require('sequelize');
require('dotenv').config(); // Para cargar las variables de entorno

// Crear instancia de Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME,       // Nombre de la base de datos
    process.env.DB_USER,       // Usuario
    process.env.DB_PASSWORD,   // Contraseña
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'postgres',   // Tipo de base de datos
        port: process.env.DB_PORT || 5432,
        logging: false         // Desactivar logs SQL (puedes cambiar esto en producción)
    }
);

// Verificar la conexión
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado a la base de datos PostgreSQL');
    } catch (error) {
        console.error('Error de conexión a PostgreSQL', error);
        process.exit(1);
    }
};

module.exports = { connectDB, sequelize };
