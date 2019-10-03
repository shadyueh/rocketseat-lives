const express = require("express");
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (edição, delete)
// req.body = Acessar corpo da requisição(criação, edição)

routes.post("/sessions", SessionController.store);

module.exports = routes;
