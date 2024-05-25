const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(express.json())

// ROUTES

// create a lunch menu/meal;;

app.post("/meals", async(req, res)=> {
    try {
        console.log(req.body);
        res.send('Lunch menu/meal created successfully!')
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error creating lunch menu/meal')
    }
})

app.get('/', (req, res) => {
    res.send(`Server Running on port: ${port}`)
});
app.listen(port, ()=> {
    console.log(`Server Running on port:${port}`);
})