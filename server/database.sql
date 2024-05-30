CREATE DATABASE lunchHub;


CREATE TABLE meal(
  meal_id SERIAL PRIMARY KEY,
  name VARCHAR(800) NOT NULL,
  items TEXT[],
  description  VARCHAR(800) NOT NULL,
  price VARCHAR(50) NOT NULL,
  calories VARCHAR(50),
  protein VARCHAR(50),
  fats VARCHAR(50),
  carbs VARCHAR(50),
  date DATE NOT NULL
)


CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(355) NOT NULL UNIQUE,
    user_img VARCHAR(555) NOT NULL,
    user_role VARCHAR(255) NOT NULL,
    user_password VARCHAR(355) NOT NULL 
);

CREATE TABLE selectedMeals (
  selectedMeals_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  price VARCHAR(20) NOT NULL,
  image VARCHAR(800) NOT NULL,
  date DATE NOT NULL
);