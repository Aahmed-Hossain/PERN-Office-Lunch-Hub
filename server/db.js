const Pool = require('pg').Pool;
const pool = new Pool({
user : 'ahmed',
password: 'muhammad',
host: 'localhost',
port: 5432,
database : 'lunchhub'
});
module.exports = pool;