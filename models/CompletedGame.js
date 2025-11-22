const mongoose = require('mongoose');

const completedGameSchema = new mongoose.Schema({
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
    fechaCompletado: {
        type: Date,
        default: Date.now
    },
    horasTotales: {
        type: Number,
        default: 0
    },
    puntuacionPersonal: {
        type: Number,
        min: 1,
        max: 5
    }
}, {
    timestamps: true
});

completedGameSchema.index({ userId: 1, gameId: 1 }, { unique: true });
module.exports = mongoose.model('CompletedGame', completedGameSchema);