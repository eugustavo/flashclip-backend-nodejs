const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nome: String,
    cpf: {
        type: Number,
        unique: true
    },
    email: {
        type: String,
        unique: true
    }
});

module.exports = mongoose.model ('User', UserSchema);