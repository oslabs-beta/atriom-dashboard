const { Pool } = require('pg');
require('dotenv').config();

let PG_URI;
if (process.env.NODE_ENV === 'testing') {
  PG_URI = process.env.PG_URI_TEST;
} else if (process.env.NODE_ENV === 'development') {
  PG_URI = process.env.PG_URI_DEV;
}

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
