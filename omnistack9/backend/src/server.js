const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({ message: "Hello Omnistack 9" });
});

app.listen(3333);
