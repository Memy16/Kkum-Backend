// RUTAS DE JUEGOS COMPLETADOS
const express = require('express');
const router = express.Router();
const { getCompletedGames, addCompletedGame } = require('../controllers/completedController');

router.get('/:userId', getCompletedGames);    // GET /api/completed/:userId
router.post('/', addCompletedGame);           // POST /api/completed

module.exports = router;