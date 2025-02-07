const express = require('express');
const router = express.Router();
const sugerenciasController = require('../controllers/sugerenciasController');

router.post('/', sugerenciasController.createSugerencia);
router.get('/', sugerenciasController.getSugerencias);

module.exports = router;
