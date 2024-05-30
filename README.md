## Table of Contents

- [Installation](#installation)
- [Key Features](#key-features)
- [Tech Stack](#tech-stack)
- [Database Schema](#database-schema)

## Tech Stack
- React.js
- Tailwindcss
- Material Ui
- React-hook-form
- tanstack/react-query
- moment
- mui/x-date-pickers
- Node.js
- Express.js
- jsonwebtoken
- pg
- bcrypt
- dotenv


## Key Features
- Register and Login Implemented.
- Jwt authentication implemented
- Afrer reloading user consisted by saving the user on local storage.
- Only current date meals will shown on the home page.
#### Admin dashboard: Admin email: ahmed.hsn.404@gmail.com Password:ahmed.hsn.404@gmail.com
- Admin can add new meal/lunch options.
- Admin can delete his added lunch options.
- Admin can't add previous date lunch option , implemented by mui date picker and  moment.
- Admin can see all menu selected by the employee/users.
- Only current days menu/lunch option shown on the home page.
#### Employee dashboard or user dashboard:
- Employee can select a meal.
- An employee can't select more than one meal option in the current day.
- Employee can delete his meal after deleting meal employee can select another one meal.

## Database Schema

```bash
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
);

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
```

## Installation

```bash
git https://github.com/Aahmed-Hossain/PERN-Office-Lunch-Hub.git
cd client
npm install
npm run dev
```








