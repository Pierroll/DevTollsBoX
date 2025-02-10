const Favorite = require('../models/favoriteModel');
const Tool = require('../models/toolModel');
const Category = require('../models/categoryModel');

exports.getFavoritesByUser = async (req, res) => {
    try {
        const { userId } = req.params;

        const favorites = await Favorite.findAll({
            where: { user_id: userId },
            include: [
                {
                    model: Tool,
                    as: 'tool',
                    attributes: ['id_tool', 'name', 'link', 'description', 'likes', 'publication_date', 'image'],
                    include: [
                        {
                            model: Category,
                            as: 'category',
                            attributes: ['name']
                        }
                    ]
                }
            ]
        });

        // ✅ Mapeo para enviar solo la información de la herramienta
        const favoriteTools = favorites.map(fav => ({
            id_tool: fav.tool.id_tool,
            name: fav.tool.name,
            description: fav.tool.description,
            link: fav.tool.link,
            image: fav.tool.image,
            category: fav.tool.category || { name: "Sin categoría" },
            likes: fav.tool.likes,
            publication_date: fav.tool.publication_date
        }));

        res.json(favoriteTools);
    } catch (error) {
        console.error('Error al obtener favoritos:', error);
        res.status(500).json({ message: 'Error al obtener favoritos.' });
    }
};

// ✅ Alternar favorito (añadir o eliminar)
exports.toggleFavorite = async (req, res) => {
    const { user_id, tool_id } = req.body;

    try {
        const existingFavorite = await Favorite.findOne({ where: { user_id, tool_id } });

        if (existingFavorite) {
            await existingFavorite.destroy();
            return res.json({ message: 'Favorito eliminado', isFavorite: false });
        } else {
            await Favorite.create({ user_id, tool_id });
            return res.json({ message: 'Favorito agregado', isFavorite: true });
        }
    } catch (error) {
        console.error('Error al alternar favorito:', error);
        res.status(500).json({ message: 'Error al alternar favorito' });
    }
};
