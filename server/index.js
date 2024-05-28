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
        const { name, items, description, price, image, calories, protein, fats, carbs } = req.body;
        const values = [name, items, description, price, image, calories, protein, fats, carbs];
        const columns = "name, items, description, price, image, calories, protein, fats, carbs";
        const placeholders = "$1, $2, $3, $4, $5, $6, $7, $8, $9";
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
        const values = [name, email, price, image, date];
        const columns = "name, email, price, image, date";
        const placeholders = "$1, $2, $3, $4, $5";
        const query = `INSERT INTO selectedmeals (${columns}) VALUES(${placeholders}) RETURNING *`;
        const selectedMeals = await pool.query(query,  values
        )
        res.json(selectedMeals.rows[0])
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error creating lunch menu/meal')
    }
});




app.get('/', (req, res) => {
    res.send(`Server Running on port: ${port}`)
});
app.listen(port, ()=> {
    console.log(`Server Running on port:${port}`);
})