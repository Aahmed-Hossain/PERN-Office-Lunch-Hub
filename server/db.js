
// const Pool = require('pg').Pool;
// const pool = new Pool({
// user : 'lunchhubuser',
// password: 'lunchHubUser@123',
// host: 'aws-0-ap-southeast-1.pooler.supabase.com',
// port: 5432,
// database : 'postgres'
// });
// module.exports = pool;


const Pool = require('pg').Pool;

const pool = new Pool({
  connectionString: process.env.DB_URI
});

module.exports = pool;
