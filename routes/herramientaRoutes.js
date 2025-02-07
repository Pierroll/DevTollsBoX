const express = require('express');
const router = express.Router();
const herramientasController = require('../controllers/herramientasController');

router.post('/', herramientasController.createHerramienta);
router.get('/', herramientasController.getHerramientas);

module.exports = router;
