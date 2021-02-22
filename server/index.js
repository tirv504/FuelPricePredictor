const express = require("express");
const path = require("path");
const axios = require("axios");

const port = 8080;
const app = express();

// Serve the client
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

// Example of a get request
app.get("/", (req, res) => {
  res.send("Hello from the server!!!");
});

// Listen to port 8080
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
