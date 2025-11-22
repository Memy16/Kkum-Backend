const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
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
    comentario: {
        type: String,
        required: true,
        maxlength: 1000
    },
    estrellas: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

reviewSchema.index({ userId: 1, gameId: 1 }, { unique: true });
reviewSchema.index({ gameId: 1, fecha: -1 });
module.exports = mongoose.model('Review', reviewSchema);