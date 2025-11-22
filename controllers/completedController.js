const CompletedGame = require('../models/CompletedGame');

const getCompletedGames = async (req, res) => {
    try {
        const completed = await CompletedGame.find({ userId: req.params.userId }).populate('gameId');
        res.json(completed);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addCompletedGame = async (req, res) => {
    try {
        const completed = new CompletedGame(req.body);
        await completed.save();
        await completed.populate('gameId');
        res.status(201).json(completed);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getCompletedGames, addCompletedGame };