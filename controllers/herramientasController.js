const Herramienta = require('../models/herramientaModel');

// Crear nueva herramienta
exports.createHerramienta = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const herramienta = await Herramienta.create({ nombre, descripcion });
        res.status(201).json(herramienta);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear herramienta' });
    }
};

// Obtener todas las herramientas
exports.getHerramientas = async (req, res) => {
    try {
        const herramientas = await Herramienta.findAll();
        res.status(200).json(herramientas);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener herramientas' });
    }
};

// Otros métodos como actualizar y eliminar pueden ser añadidos aquí
