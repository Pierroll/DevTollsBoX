const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./db/connection');  // Conexión a la base de datos
const herramientaRoutes = require('./routes/herramientaRoutes');  // Rutas para herramientas
const sugerenciaRoutes = require('./routes/sugerenciaRoutes');  // Rutas para sugerencias

// Cargar variables de entorno
dotenv.config();

// Crear la aplicación Express
const app = express();

// Middleware
app.use(express.json());  // Para leer JSON en el cuerpo de las peticiones
app.use(cors());  // Para permitir solicitudes CORS

// Conectar a la base de datos
connectDB();

// Definir las rutas
app.use('/api/herramientas', herramientaRoutes);
app.use('/api/sugerencias', sugerenciaRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 5000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

const { sequelize } = require('./db/connection');

// Sincronizar modelos con la base de datos
sequelize.sync()
    .then(() => {
        console.log('Modelos sincronizados con la base de datos');
    })
    .catch((error) => {
        console.error('Error al sincronizar los modelos', error);
    });
