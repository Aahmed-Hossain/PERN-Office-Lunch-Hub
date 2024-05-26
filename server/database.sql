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

CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(355) NOT NULL UNIQUE,
    user_img VARCHAR(555) NOT NULL,
    user_password VARCHAR(355) NOT NULL 
);
---------inser fake data
INSERT INTO users (user_name, user_email, user_img, user_password) VALUES ('ahmed', 'ahmed@gmail.com', 'https://ahmed.png', 'ahmed123');