const Like = require('../models/likeModel');

exports.toggleLike = async (req, res) => {
    try {
        const { user_id, tool_id } = req.body;

        const existingLike = await Like.findOne({ where: { user_id, tool_id } });
        if (existingLike) {
            await existingLike.destroy();
            return res.json({ message: 'Like eliminado.' });
        }

        await Like.create({ user_id, tool_id });
        res.json({ message: 'Like añadido.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al gestionar el like.' });
    }
};

exports.getLikesForTool = async (req, res) => {
    try {
        const { toolId } = req.params;
        const { userId } = req.query;

        const likesCount = await Like.count({ where: { tool_id: toolId } }); // ✅ Cuenta los likes en tiempo real
        const userLiked = await Like.findOne({ where: { tool_id: toolId, user_id: userId } });

        res.json({
            likes: likesCount,
            likedByUser: !!userLiked
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener likes.' });
    }
};
