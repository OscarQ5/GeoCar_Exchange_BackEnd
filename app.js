const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const carsController = require("./controllers/carsController.js")

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use("/cars", carsController);

app.get("/", (req, res) => {
  res.send("Welcome to the GeoCar Exchange!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;