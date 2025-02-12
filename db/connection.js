const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
        ssl: process.env.NODE_ENV === 'production' ? { require: true, rejectUnauthorized: false } : false
    },
    define: {
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
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
