const express = require("express");

const app = express();

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (edição, delete)
// req.body = Acessar corpo da requisição(criação, edição)

app.use(express.json());

app.post("/users", (req, res) => {
  return res.json(req.body);
});

app.listen(3333);
