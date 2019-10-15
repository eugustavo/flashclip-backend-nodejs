const express = require('express');

const CursoController = require('./controllers/CursoController');
const InscricaController = require('./controllers/InscricaoController');
const UserController = require('./controllers/UserController');

const routes = express.Router();

// Rotas de Curso
routes.get('/cursos', CursoController.show);
routes.post('/curso', CursoController.store);

// Rotas de Inscrição
routes.get('/inscricoes', InscricaController.show);
routes.post('/inscricao', InscricaController.store);

// Rotas de Usuário
routes.get('/usuarios', UserController.show);
routes.post('/usuario', UserController.store);

module.exports = routes;