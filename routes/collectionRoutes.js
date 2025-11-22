// RUTAS DE COLECCIÓN
const express = require('express');
const router = express.Router();
const { 
    getUserCollection, 
    addToCollection, 
    removeFromCollection 
} = require('../controllers/collectionController');

router.get('/:userId', getUserCollection);              // GET /api/collection/:userId
router.post('/', addToCollection);                      // POST /api/collection
router.delete('/:userId/:gameId', removeFromCollection); // DELETE /api/collection/:userId/:gameId

module.exports = router;