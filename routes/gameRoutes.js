// RUTAS DE JUEGOS
const express = require('express');
const router = express.Router();
const { getAllGames, getGameById } = require('../controllers/gameController');

router.get('/', getAllGames);           // GET /api/games
router.get('/:id', getGameById);        // GET /api/games/:id

module.exports = router;