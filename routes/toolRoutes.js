const express = require('express');
const router = express.Router();
const toolsController = require('../controllers/toolsController');

router.get('/recent', toolsController.getRecentTools);  // ✅ Ruta para herramientas recientes
// ✅ Ruta para obtener todas las herramientas (opcionalmente filtradas por categoría)
router.get('/', toolsController.getAllTools);
router.get('/popular', toolsController.getPopularTools);  // ✅ Ruta para herramientas populares
router.get('/recent', toolsController.getRecentTools);
router.get('/search', toolsController.searchTools);

// ✅ Ruta para obtener una herramienta por su ID
router.get('/:id', toolsController.getToolById);





module.exports = router;
