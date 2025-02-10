const Tool = require('../models/toolModel');
const { Op } = require('sequelize'); // ✅ Importación necesaria
const Category = require('../models/categoryModel');

exports.getAllTools = async (req, res) => {
    try {
        const { category } = req.query;

        let tools;
        if (category) {
            const foundCategory = await Category.findOne({ where: { name: category } });
            if (!foundCategory) {
                return res.status(404).json({ message: 'Categoría no encontrada.' });
            }
            tools = await Tool.findAll({
                where: { category_id: foundCategory.id_category },
                include: [{ model: Category, as: 'category', attributes: ['name'] }] // ✅ Incluir categoría
            });
        } else {
            tools = await Tool.findAll({
                include: [{ model: Category, as: 'category', attributes: ['name'] }] // ✅ Incluir categoría
            });
        }

        res.json(tools);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener herramientas.' });
    }
};


// ✅ Obtener una herramienta específica por ID
exports.getToolById = async (req, res) => {
    try {
        const { id } = req.params;

        const tool = await Tool.findByPk(id, {
            include: [{ model: Category, as: 'category', attributes: ['name'] }] // ✅ Incluye el nombre de la categoría
        });

        if (!tool) {
            return res.status(404).json({ message: 'Herramienta no encontrada.' });
        }

        res.json(tool);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener la herramienta.' });
    }
};


// 📅 Obtener las 8 herramientas más recientes
exports.getRecentTools = async (req, res) => {
    try {
        const recentTools = await Tool.findAll({
            order: [['publication_date', 'DESC']],
            limit: 8,
            include: [{ model: Category, as: 'category', attributes: ['name'] }] // ✅ Incluir categoría
        });
        res.json(recentTools);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener herramientas recientes.' });
    }
};


exports.getPopularTools = async (req, res) => {
    try {
        const popularTools = await Tool.findAll({
            order: [['likes', 'DESC']],
            limit: 8,
            include: [{ model: Category, as: 'category', attributes: ['name'] }] // ✅ Incluir categoría
        });
        res.json(popularTools);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener herramientas populares.' });
    }
};


// 🔍 Búsqueda de herramientas por nombre o descripción
exports.searchTools = async (req, res) => {
    try {
        const { query, category } = req.query;

        if (!query) {
            return res.status(400).json({ message: "El parámetro 'query' es obligatorio." });
        }

        // Condición de búsqueda básica
        const searchCondition = {
            [Op.or]: [
                { name: { [Op.iLike]: `%${query}%` } },         // Búsqueda por nombre (insensible a mayúsculas/minúsculas)
                { description: { [Op.iLike]: `%${query}%` } }  // Búsqueda por descripción
            ]
        };

        // Filtrado por categoría si se proporciona
        if (category) {
            const foundCategory = await Category.findOne({ where: { name: category } });
            if (foundCategory) {
                searchCondition.category_id = foundCategory.id_category;
            } else {
                return res.status(404).json({ message: 'Categoría no encontrada.' });
            }
        }

        const tools = await Tool.findAll({
            where: searchCondition,
            include: [{ model: Category, as: 'category', attributes: ['name'] }]
        });

        res.json(tools);
    } catch (error) {
        console.error("Error en searchTools:", error);
        res.status(500).json({ message: "Error al buscar herramientas." });
    }
};