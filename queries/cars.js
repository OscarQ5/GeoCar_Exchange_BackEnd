const db = require("../db/dbConfig.js");

const getAllCars = async () => {
  try {
    const allCars = await db.any("SELECT * FROM cars");
    return allCars;
  } catch (err) {
    return err;
  }
};

const getCar = async (id) => {
  try {
    const oneCar = await db.one("SELECT * FROM cars WHERE id=$1", id);
    return oneCar;
  } catch (err) {
    return err;
  }
};

const createCar = async (car) => {
  try {
    const imageUrl = car.image_url || '/Users/oscarquintanilla/Git/Module 4/FS_Portfolio_project/Back-end/assets/CAR_DEFAULT.jpg';
    const newCar = await db.one(
      "INSERT INTO cars (make, model, year, price, color, mileage, condition, location, image_url, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        car.make,
        car.model,
        car.year,
        car.price,
        car.color,
        car.mileage,
        car.condition,
        car.location,
        imageUrl,
        car.is_favorite,
      ]
    );
    return newCar;
  } catch (err) {
    return err;
  }
};

const deleteCar = async (id) => {
  try {
    const deletedCar = await db.one(
      "DELETE FROM cars WHERE id=$1 RETURNING *",
      id
    );
    return deletedCar;
  } catch (err) {
    return err;
  }
};

const updateCar = async (id, car) => {
  try {
    const imageUrl = car.image_url || '/Users/oscarquintanilla/Git/Module 4/FS_Portfolio_project/Back-end/assets/CAR_DEFAULT.jpg';
    const updatedCar = await db.one(
      "UPDATE cars SET make=$1, model=$2, year=$3, price=$4, color=$5, mileage=$6, condition=$7, location=$8, image_url=$9, is_favorite=$10 WHERE id=$11 RETURNING *",
      [
        car.make,
        car.model,
        car.year,
        car.price,
        car.color,
        car.mileage,
        car.condition,
        car.location,
        imageUrl,
        car.is_favorite,
        id,
      ]
    );
    return updatedCar;
  } catch (err) {
    return err;
  }
};

module.exports = {
  getAllCars,
  getCar,
  createCar,
  deleteCar,
  updateCar,
};
