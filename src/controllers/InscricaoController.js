const Inscricao = require('../models/Inscricao');

module.exports = {
    async store(req, res){
        const { curso_id } = req.headers;
        const { user_id } = req.headers;

        const inscricao = await Inscricao.create({
            curso: curso_id,
            user: user_id
        });

        await inscricao.populate('curso').populate('user').execPopulate();

        return res.json(inscricao);
    },

    async show(req, res){
        const inscricoes = await Inscricao.find();

        return res.json(inscricoes);
        
    }
};