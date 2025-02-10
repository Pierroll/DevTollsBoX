const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');
const Category = require('./categoryModel'); // ✅ Importar el modelo de categoría

const Tool = sequelize.define('Tool', {
    id_tool: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    link: { type: DataTypes.STRING },
    description: { type: DataTypes.TEXT, allowNull: false },
    category_id: { type: DataTypes.INTEGER, references: { model: 'categories', key: 'id_category' } },
    likes: { type: DataTypes.INTEGER, defaultValue: 0 },
    publication_date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    image: { type: DataTypes.STRING },
    tuto1: { type: DataTypes.TEXT },
    tuto2: { type: DataTypes.TEXT },
}, {
    tableName: 'tools',
    timestamps: false
});

// ✅ Relación: Una herramienta pertenece a una categoría
Tool.belongsTo(Category, { foreignKey: 'category_id', as: 'category' });

module.exports = Tool;
