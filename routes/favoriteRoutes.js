const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favoritesController');

// ✅ Alternar favorito (añadir o eliminar)
router.post('/', favoriteController.toggleFavorite);

// ✅ Obtener favoritos de un usuario
router.get('/:userId', favoriteController.getFavoritesByUser);

module.exports = router;
