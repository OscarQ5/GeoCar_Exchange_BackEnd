DROP DATABASE IF EXISTS cars_dev;
CREATE DATABASE cars_dev;

\c cars_dev;

CREATE TABLE cars (
  id SERIAL PRIMARY KEY,
  make VARCHAR(50) NOT NULL,
  model VARCHAR(50) NOT NULL,
  year INTEGER NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  color VARCHAR(20),
  mileage INTEGER,
  condition VARCHAR(20) DEFAULT 'New' CHECK (condition IN ('New', 'Used', 'Certified')),
  location VARCHAR(255),
  image_url VARCHAR(255),
  is_favorite BOOLEAN
);