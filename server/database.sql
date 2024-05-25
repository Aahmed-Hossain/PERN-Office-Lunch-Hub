CREATE DATABASE lunchHub;

CREATE TABLE meal(
    meal_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    items VARCHAR(500),
    description VARCHAR(700),
    price VARCHAR(20),
    image VARCHAR(500),
    calories VARCHAR(10),
    protein  VARCHAR(10),
    fats  VARCHAR(10),
    carbs  VARCHAR(10)
);