const router = require('express').Router();
const bcrypt = require('bcrypt');
const pool = require('./db');
const jwtGenerator = require('./jwtGenerator');
const jwtAuthorization = require('./authorize');
// register
router.post('/register', async (req, res) => {
    try {
        const { name, email, image,role, password } = req.body;
        const userQuery = await pool.query('SELECT * FROM users WHERE user_email = $1', [email]);

        if (userQuery.rows.length > 0) {
            return res.status(400).json('User already exists' );
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // Insert the new user into the database
        const newUser = await pool.query(
            'INSERT INTO users (user_name, user_email, user_img, user_role, user_password) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [name, email, image, role, hashedPassword]
        );
        // jwt token
        const token = jwtGenerator(newUser.rows[0].user_id);
        const userInfo = {name, email, image,role}
        res.json({token,userInfo});
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
            return res.status(401).json("Email is incorrect")
        }
        const validPassword  = await bcrypt.compare(password, user.rows[0].user_password )
console.log(validPassword)
        if(!validPassword){
            return res.status(401).json("Password  is incorrect")
        }
        const userInfo = {name: user.rows[0].user_name, email: user.rows[0].user_email,image: user.rows[0].user_img, role: user.rows[0].user_role};
        
        const token = jwtGenerator(user.rows[0].user_id);
        res.json({token,userInfo})
    } catch (err) {
        console.error(err.message)
        return res.status(500).json("Server error");
        
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