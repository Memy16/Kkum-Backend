const Review = require('../models/Review');

const getReviewsByGame = async (req, res) => {
    try {
        const reviews = await Review.find({ gameId: req.params.gameId })
            .populate('userId', 'nombre email')
            .populate('gameId', 'titulo');
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createReview = async (req, res) => {
    try {
        const review = new Review(req.body);
        await review.save();
        await review.populate('userId', 'nombre email');
        await review.populate('gameId', 'titulo');
        res.status(201).json(review);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getReviewsByGame, createReview };
