const express = require('express');
const router = express.Router();
const suggestionsController = require('../controllers/suggestionsController');

router.get('/', suggestionsController.getSuggestions);
router.post('/', suggestionsController.createSuggestion);

module.exports = router;
