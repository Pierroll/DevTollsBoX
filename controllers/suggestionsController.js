const Suggestion = require('../models/suggestionModel');
const {DataTypes} = require("sequelize");
const Tool = require("../models/toolModel");

/**
 * Create a new suggestion
 * @param req
 * @param res
 * @description creates a new suggestion with the provided name, link, and comment
 * @returns {Promise<void>}
 */
exports.createSuggestion = async (req, res) => {
    try {
        const { name, link, comment } = req.body;
        const suggestion = await Suggestion.create({ name, link, comment });
        res.status(201).json(suggestion);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating suggestion' });
    }
};

/**
 * Get all suggestions
 * @param req
 * @param res
 * @description retrieves all suggestions from the database
 * @returns {Promise<void>}
 */
exports.getSuggestions = async (req, res) => {
    try {
        const suggestions = await Suggestion.findAll();
        res.status(200).json(suggestions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving suggestions' });
    }
};

/**
 * Get a suggestion by ID
 * @param req
 * @param res
 * @description retrieves a suggestion by its ID
 * @returns {Promise<void>}
 */
exports.getSuggestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const suggestion = await Suggestion.findByPk(id);
        if (suggestion) {
            res.status(200).json(suggestion);
        } else {
            res.status(404).json({ error: 'Suggestion not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving suggestion by id' });
    }
};

/**
 * Delete a suggestion by ID
 * @param req
 * @param res
 * @description deletes a suggestion by its ID
 * @returns {Promise<void>}
 */
exports.deleteSuggestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const suggestion = await Suggestion.findByPk(id);
        if (suggestion) {
            await suggestion.destroy();
            res.status(200).json({ message: 'Suggestion deleted successfully' });
        } else {
            res.status(404).json({ error: 'Suggestion not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting suggestion' });
    }
};

/**
 * Update a suggestion by ID
 * @param req
 * @param res
 * @description updates the details of a suggestion given by its ID
 * @returns {Promise<void>}
 */
exports.updateSuggestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, link, comment } = req.body;
        const suggestion = await Suggestion.findByPk(id);
        if (suggestion) {
            suggestion.name = name;
            suggestion.link = link;
            suggestion.comment = comment;
            await suggestion.save();
            res.status(200).json(suggestion);
        } else {
            res.status(404).json({ error: 'Suggestion not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating suggestion' });
    }
};
