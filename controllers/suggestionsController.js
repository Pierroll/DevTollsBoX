const Suggestion = require('../models/suggestionModel');

exports.createSuggestion = async (req, res) => {
    try {
        const suggestion = await Suggestion.create(req.body);
        res.status(201).json(suggestion);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la sugerencia.' });
    }
};


exports.getSuggestions = async (req, res) => {
    try {
        const suggestions = await Suggestion.findAll({
            order: [['date', 'DESC']], // Ordenar por la fecha más reciente
            limit: 10                  // Limitar a 10 resultados
        });
        res.json(suggestions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener sugerencias.' });
    }
};
