const Tool = require('../models/toolModel');
const {DataTypes} = require("sequelize");

/**
 * Create a new tool
 * @param req
 * @param res
 * @description creates a new tool with the provided name, link, description, category, rating, and image
 * @returns {Promise<void>}
 */
exports.createTool = async (req, res) => {
    try {
        const { name, link, description, category, rating, image } = req.body;
        const tool = await Tool.create({ name, description });
        res.status(201).json(tool);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error creating tool' });
    }
};

/**
 * Get all tools
 * @param req
 * @param res
 * @description retrieves all tools from the database
 * @returns {Promise<void>}
 */
exports.getTools = async (req, res) => {
    try {
        const tools = await Tool.findAll();
        res.status(200).json(tools);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving tools' });
    }
};

/**
 * Get a tool by ID
 * @param req
 * @param res
 * @description retrieves a tool by its ID
 * @returns {Promise<void>}
 */
exports.getToolById = async (req, res) => {
    try {
        const { id } = req.params;
        const tool = await Tool.findByPk(id);
        if (tool) {
            res.status(200).json(tool);
        } else {
            res.status(404).json({ error: 'Tool not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving tool' });
    }
};

/**
 * Delete a tool by ID
 * @param req
 * @param res
 * @description deletes a tool by its ID
 * @returns {Promise<void>}
 */
exports.deleteToolById = async (req, res) => {
    try {
        const { id } = req.params;
        const tool = await Tool.findByPk(id);
        if (tool) {
            await tool.destroy();
            res.status(200).json({ message: 'Tool deleted successfully' });
        } else {
            res.status(404).json({ error: 'Tool not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error deleting tool' });
    }
};

/**
 * Update a tool by ID
 * @param req
 * @param res
 * @description updates the details of a tool given by its ID
 * @returns {Promise<void>}
 */
exports.updateToolById = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, link, description, category, rating, image } = req.body;
        const tool = await Tool.findByPk(id);
        if (tool) {
            tool.name = name;
            tool.link = link;
            tool.description = description;
            tool.category = category;
            tool.rating = rating;
            tool.image = image;
            await tool.save();
            res.status(200).json(tool);
        } else {
            res.status(404).json({ error: 'Tool not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error updating tool' });
    }
};