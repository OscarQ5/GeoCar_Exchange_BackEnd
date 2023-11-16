const express = require("express");
const cars = express.Router();
const {
  getAllCars,
  getCar,
  createCar,
  deleteCar,
  updateCar,
} = require("../queries/cars.js");

cars.get("/", async (req, res) => {
  const allCars = await getAllCars();
  if (allCars[0]) {
    res.status(200).json(allCars);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

cars.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneCar = await getCar(id);
  if (oneCar) {
    res.status(200).json(oneCar);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
});

cars.post("/", async (req, res) => {
  const car = await createCar(req.body);
  res.status(201).json(car);
});

cars.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedCar = await deleteCar(id);
  if (deletedCar.id) {
    res.status(200).json(deletedCar);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
});

cars.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedCar = await updateCar(id, req.body);
  if (updatedCar.id) {
    res.status(200).json(updatedCar);
  } else {
    res.status(404).json({ error: "Car not found" });
  }
});

module.exports = cars;