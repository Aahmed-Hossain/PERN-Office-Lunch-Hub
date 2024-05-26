const router = require('express').Router();
const bcrypt = require('bcrypt');
const pool = require('./db');
const jwtGenerator = require('./jwtGenerator');
const jwtAuthorization = require('./authorize');
// register
router.post('/register', async (req, res) => {
    try {
        const { name, email, image, password } = req.body;
        const userQuery = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);

        if (userQuery.rows.length > 0) {
            return res.status(400).json('User already exists' );
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // Insert the new user into the database
        const newUser = await pool.query(
            'INSERT INTO users (user_name, user_email, user_img, user_password) VALUES ($1, $2, $3, $4) RETURNING *',
            [name, email, image, hashedPassword]
        );
        // jwt token
        const token = jwtGenerator(newUser.rows[0].user_id)
        res.json({token});
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Server error' });
    }
});

// login
router.post('/login', async(req,res)=> {
    try {
        const {email, password} = req.body;
        const user = await pool.query("SELECT * FROM  users WHERE  user_email = $1", [email]);
        if(user.rows.length === 0){
            return res.status(401).json("Password or Email is incorrect")
        }
        
        const validPassword  = await bcrypt.compare(password, user.rows[0].user_password )

        if(!validPassword){
            return res.status(401).json("Password or Email is incorrect")
        }
        const token = jwtGenerator(user.rows[0].user_id);
        res.json({token})
    } catch (err) {
        console.error(err.message)
        
    }
});

// authorization
router.get('/authorization',jwtAuthorization, async(req,res)=> {
    try {
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [req.user])
        res.json(user.rows[0])
    } catch (err) {
        console.error(err.message)
        
    }
})







module.exports = router;