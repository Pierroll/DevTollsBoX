const { DataTypes } = require('sequelize');
const { sequelize } = require('../db/connection');

const Like = sequelize.define('Like', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: { type: DataTypes.STRING, allowNull: false },
    tool_id: { type: DataTypes.INTEGER, allowNull: false }
}, {
    tableName: 'likes',
    timestamps: false
});

module.exports = Like;
