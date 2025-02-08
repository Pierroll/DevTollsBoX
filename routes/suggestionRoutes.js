const express = require('express');
const router = express.Router();
const suggestionsController = require('../controllers/suggestionsController');

router.post('/', suggestionsController.createSuggestion);
router.get('/', suggestionsController.getSuggestions);
router.get('/:id', suggestionsController.getSuggestionById);
router.delete('/:id', suggestionsController.deleteSuggestionById);
router.put('/:id', suggestionsController.updateSuggestionById);

module.exports = router;
