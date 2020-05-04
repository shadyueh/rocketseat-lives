const express = require("express");

const app = express();

// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros:

// Query params: request.query (filtros, ordenação, paginação)

app.get("/", (request, response) => {
  return response.json({ message: "Hello Omnistack" });
});
app.listen(3333);
