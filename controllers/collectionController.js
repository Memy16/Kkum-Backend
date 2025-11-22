const UserGame = require('../models/UserGame');

const getUserCollection = async (req, res) => {
    try {
        const collection = await UserGame.find({ userId: req.params.userId }).populate('gameId');
        res.json(collection);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const addToCollection = async (req, res) => {
    try {
        const userGame = new UserGame(req.body);
        await userGame.save();
        await userGame.populate('gameId');
        res.status(201).json(userGame);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const removeFromCollection = async (req, res) => {
    try {
        const { userId, gameId } = req.params;
        const result = await UserGame.findOneAndDelete({ userId, gameId });
        
        if (!result) {
            return res.status(404).json({ error: 'Juego no encontrado en la colección' });
        }
        
        res.json({ message: 'Juego eliminado de la colección' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { 
    getUserCollection, 
    addToCollection, 
    removeFromCollection  
};