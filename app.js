const express = require('express');
const cors = require('cors');
const { connectDB } = require('./db/connection');

// Importación de Rutas
const categoryRoutes = require('./routes/categoryRoutes');
const toolRoutes = require('./routes/toolRoutes');
const favoriteRoutes = require('./routes/favoriteRoutes');  // ⭐ Rutas de Favoritos
const likeRoutes = require('./routes/likeRoutes');          // ❤️ Rutas de Likes
const suggestionRoutes = require('./routes/suggestionRoutes'); // 💡 Rutas de Sugerencias

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDB();

// 📦 Uso de las rutas
app.use('/api/categories', categoryRoutes);   // 📂 Categorías
app.use('/api/tools', toolRoutes);            // 🛠️ Herramientas
app.use('/api/favorites', favoriteRoutes);    // ⭐ Favoritos
app.use('/api/likes', likeRoutes);            // ❤️ Likes
app.use('/api/suggestions', suggestionRoutes); // 💡 Sugerencias

// 🚀 Iniciar el servidor
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en http://localhost:${PORT}`));
