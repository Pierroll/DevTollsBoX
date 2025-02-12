const { Sequelize } = require('sequelize');
require('dotenv').config();

// Conexión utilizando el URI desde el archivo .env
const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false, // Opcional: desactiva los logs de SQL en la consola
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Conexión exitosa a la base de datos PostgreSQL.');
    } catch (error) {
        console.error('❌ Error de conexión a la base de datos:', error);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
