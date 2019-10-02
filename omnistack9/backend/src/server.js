const express = require("express");

const app = express();

app.post("/users", (req, res) => {
  // query params
  return res.json({ idade: req.query.idade });
});

app.listen(3333);
