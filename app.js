const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./db/connection');  // Database connection
const toolRoutes = require('./routes/toolRoutes');  // Routes for tools
const suggestionRoutes = require('./routes/suggestionRoutes');  // Routes for suggestions

// Load environment variables
dotenv.config();

// Create the Express application
const app = express();

// Middleware
app.use(express.json());  // To parse JSON in request bodies
app.use(cors());  // To allow CORS requests

// Connect to the database
connectDB();

// Define routes
app.use('/api/tools', toolRoutes);
app.use('/api/suggestions', suggestionRoutes);

// Server port
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const { sequelize } = require('./db/connection');

// Sync models with the database
sequelize.sync()
    .then(() => {
        console.log('Models synchronized with the database');
    })
    .catch((error) => {
        console.error('Error synchronizing models', error);
    });
