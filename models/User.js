const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => uuidv4()  
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    googleId: {
        type: String
    },
    nombre: {
        type: String,
        trim: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);