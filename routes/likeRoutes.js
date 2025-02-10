const express = require('express');
const router = express.Router();
const likeController = require('../controllers/likesController');

router.post('/toggle', likeController.toggleLike);
router.get('/:toolId', likeController.getLikesForTool);

module.exports = router;
