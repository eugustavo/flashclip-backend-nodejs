const mongoose = require('mongoose');

const CursoSchema = new mongoose.Schema({
    nome: String,
    data: Number,
    descricao: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Curso', CursoSchema);