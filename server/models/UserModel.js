const { Pool } = require('pg');
require('dotenv').config();

const PG_URI =
  process.env.NODE_ENV === 'testing'
    ? process.env.PG_URI_TEST
    : process.env.PG_URI_DEV;

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
