const express = require("express");

const routes = express.Router();

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (edição, delete)
// req.body = Acessar corpo da requisição(criação, edição)

routes.post("/users", (req, res) => {
  return res.json(req.body);
});

module.exports = routes;
