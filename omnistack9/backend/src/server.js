const express = require("express");

const app = express();

// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (edição, delete)

app.post("/users", (req, res) => {
  // query params
  return res.json({ idade: req.query.idade });
});

app.put("/users/:id", (req, res) => {
  // route params
  return res.json({ id: req.params.id });
});

app.listen(3333);
