//Colección de juegos de un usuario
const mongoose = require('mongoose');

const userGameSchema = new mongoose.Schema({
    userId: {
        type: String,  
        ref: 'User',
        required: true
    },
    gameId: {
        type: String,  
        ref: 'Game', 
        required: true
    },
    fechaAgregado: {
        type: Date,
        default: Date.now
    },
    horasJugadas: {
        type: Number,
        default: 0
    },
    estado: {
        type: String,
        enum: ['pendiente', 'jugando', 'completado', 'abandonado'],
        default: 'pendiente'
    }
}, {
    timestamps: true
});

userGameSchema.index({ userId: 1, gameId: 1 }, { unique: true });
module.exports = mongoose.model('UserGame', userGameSchema);