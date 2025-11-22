const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true
    },
    categorias: [{
        type: String,
        required: true
    }],
    dispositivo: {
        type: String,
        required: true,
        enum: ['Computadora', 'Celular', 'Tablet', 'Consola']
    },
    imagen: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true,
    collection: 'juegos'
});

gameSchema.index({ titulo: 'text', descripcion: 'text' });
gameSchema.index({ categorias: 1 });
gameSchema.index({ dispositivo: 1 });

module.exports = mongoose.model('Game', gameSchema);