const Sugerencia = require('../models/sugerenciaModel');

// Crear nueva sugerencia
exports.createSugerencia = async (req, res) => {
    try {
        const { titulo, descripcion } = req.body;
        const sugerencia = await Sugerencia.create({ titulo, descripcion });
        res.status(201).json(sugerencia);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear sugerencia' });
    }
};

// Obtener todas las sugerencias
exports.getSugerencias = async (req, res) => {
    try {
        const sugerencias = await Sugerencia.findAll();
        res.status(200).json(sugerencias);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener sugerencias' });
    }
};
