const Pool = require('pg').Pool;
const pool = new Pool({
user : 'lunchhubuser',
password: 'lunchHubUser@123',
host: 'localhost',
port: 5432,
database : 'lunchhub'
});
module.exports = pool;