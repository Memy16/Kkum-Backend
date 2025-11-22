const Game = require('../models/Game');

const getAllGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.json(games);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getGameById = async (req, res) => {
    try {
        const game = await Game.findById(req.params.id);
        if (!game) return res.status(404).json({ error: 'Juego no encontrado' });
        res.json(game);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllGames, getGameById };