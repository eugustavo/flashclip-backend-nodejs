const Curso = require('../models/Curso');

module.exports = {
    async store (req, res){
        const { nome, data, descricao } = req.body;

        const curso = await Curso.create({
            nome: nome,
            data: data,
            descricao: descricao,
        });

        return res.json(curso);
    },

    async show(req, res){
        const cursos =  await Curso.find();

        return res.json(cursos);
    }
}