const express = require('express');
const router = express.Router();
const toolsController = require('../controllers/toolsController');

router.post('/', toolsController.createTool);
router.get('/', toolsController.getTools);
router.get('/:id', toolsController.getToolById);
router.delete('/:id', toolsController.deleteToolById);
router.put('/:id', toolsController.updateToolById);

module.exports = router;
