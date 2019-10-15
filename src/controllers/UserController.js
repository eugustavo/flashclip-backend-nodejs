const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { nome, cpf, email } = req.body;
        
        const user = await User.create({
            nome: nome,
            cpf: cpf,
            email: email
        });
        
        return res.json(user);
    },

    async show(req, res){
        const users = await User.find();

        return res.json(users);
    }
};