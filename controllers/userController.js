const User = require('../models/User');

const createUser = async (req, res) => {
    try {
        const { _id, email, googleId, nombre } = req.body;
        if (!email) return res.status(400).json({ error: 'Email requerido' });

        let user = await User.findOne({ $or: [{ _id }, { email }] });

        if (user) {
            user.googleId = googleId ?? user.googleId;
            user.nombre = nombre ?? user.nombre;
            user.email = email ?? user.email;
            await user.save();
            return res.status(200).json(user);
        }

        const newUser = new User({ _id, email, googleId, nombre });
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createUser, getUserById };
