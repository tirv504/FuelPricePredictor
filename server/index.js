const express = require("express");
const axios = require("axios");

const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from the server!!!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
