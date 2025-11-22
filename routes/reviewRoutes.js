// RUTAS DE RESEÑAS
const express = require('express');
const router = express.Router();
const { getReviewsByGame, createReview } = require('../controllers/reviewController');

router.get('/game/:gameId', getReviewsByGame);  // GET /api/reviews/game/:gameId
router.post('/', createReview);                 // POST /api/reviews

module.exports = router;