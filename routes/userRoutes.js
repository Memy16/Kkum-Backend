// RUTAS DE USUARIOS
const express = require('express');
const router = express.Router();
const { createUser, getUserById } = require('../controllers/userController');

router.post('/', createUser);           // POST /api/users
router.get('/:id', getUserById);        // GET /api/users/:id

module.exports = router;