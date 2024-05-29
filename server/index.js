const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')
require('dotenv').config();
const port = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(express.json())

// ROUTES
// register and login
app.use('/auth', require('./jwtAuth'));
// create a lunch menu/meal;;
app.post("/meals", async(req, res)=> {
    try {
        const { name, items, description, price, image, calories, protein, fats, carbs,date } = req.body;
        const values = [name, items, description, price, image, calories, protein, fats, carbs,date];
        const columns = "name, items, description, price, image, calories, protein, fats, carbs, date";
        const placeholders = "$1, $2, $3, $4, $5, $6, $7, $8, $9, $10";
        const query = `INSERT INTO meal (${columns}) VALUES(${placeholders}) RETURNING *`;
        const newMeal = await pool.query(query,  values
        )
        res.json(newMeal.rows[0])
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error creating lunch menu/meal')
    }
});

// get all lunch menu/meal;
app.get('/meals', async(req, res)=> {
    try {
        const allMeals = await pool.query("SELECT * FROM meal");
        res.json(allMeals.rows)
    } catch (err) {
        console.error(err.message)
    }
});

// get single meal 
app.get('/meals/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const meal = await pool.query("SELECT * FROM meal WHERE meal_id=$1",[id]);
        res.json(meal.rows[0]);
    } catch (err) {
        console.error(err.message)
    }
});

// delete a meal;
app.delete('/meals/:id', async(req,res)=> {
const {id} = req.params;
const deletedMeal = await pool.query('DELETE FROM meal WHERE meal_id=$1',[id]);
res.json('Your Meal Deleted Successfully');
});

// post a selected meal;

app.post("/selectedMeals", async(req, res)=> {
    try {
        const { name, email, price, image, date } = req.body;
        const checkQuery = `SELECT * FROM selectedmeals WHERE name = $1 AND email = $2 AND date = $3`;
        const checkValues = [name, email, date];
        const alreadySelectedMeal = await pool.query(checkQuery, checkValues);

        if (alreadySelectedMeal.rows.length > 0) {
            // User has already selected this meal
            return res.status(400).json({ message: 'You have already selected this meal.' });
        }
        const values = [name, email, price, image, date];
        const columns = "name, email, price, image, date";
        const placeholders = "$1, $2, $3, $4, $5";
        // const alreadySelectedMeal =
        const query = `INSERT INTO selectedmeals (${columns}) VALUES(${placeholders}) RETURNING *`;
        const selectedMeals = await pool.query(query,  values
        )
        res.json(selectedMeals.rows[0])
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error creating lunch menu/meal')
    }
});
// get the selected meal;
app.get('/selectedMeals/:email', async(req, res)=> {
    try {
        const {email} = req.params;
        const selectedMeals = await pool.query("SELECT * FROM selectedmeals WHERE email=$1",[email]);
        res.json(selectedMeals.rows)
    } catch (err) {
        console.error(err.message)
    }
});
app.get('/selectedMeals', async(req, res)=> {
    try {
        const selectedMeals = await pool.query("SELECT * FROM selectedmeals");
        res.json(selectedMeals.rows)
    } catch (err) {
        console.error(err.message)
    }
});

// delete a selectedMeal;
app.delete('/selectedMeals/:id', async(req,res)=> {
    const {id} = req.params;
    const deletedMeal = await pool.query('DELETE FROM selectedmeals WHERE selectedmeals_id=$1',[id]);
    res.json('The Meal Deleted Successfully');
    });




app.get('/', (req, res) => {
    res.send(`Server Running on port: ${port}`)
});
app.listen(port, ()=> {
    console.log(`Server Running on port:${port}`);
})