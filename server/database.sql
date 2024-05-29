CREATE DATABASE lunchHub;




CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(355) NOT NULL UNIQUE,
    user_img VARCHAR(555) NOT NULL,
    user_role VARCHAR(255) NOT NULL,
    user_password VARCHAR(355) NOT NULL 
);
---------delete a table 
DROP TABLE table_name
---------inser fake data
INSERT INTO users (user_name, user_email, user_img,user_role, user_password) VALUES ('ahmed', 'ahmed@gmail.com', 'https://ahmed.png', 'ahmed123');

CREATE TABLE selectedMeals (
  selectedMeals_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  price VARCHAR(20) NOT NULL,
  image VARCHAR(800) NOT NULL,
  date DATE NOT NULL
);