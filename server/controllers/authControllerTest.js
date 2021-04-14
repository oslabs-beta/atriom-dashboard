const usersDb = require('../db/users');
const db = require('../models/UserModel');

const authController = {};

authController.getCurrentUser = (req, res, next) => {
  const { username } = req.cookies;
  const data = usersDb.find(username);
  res.locals.user = data.rows[0];
  return next();
};

authController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  const query = `INSERT INTO users (username, password) VALUES ($1, $2) RETURNING username, id;`;
  db.query(query, [username, password]).then((data) => {
    res.locals.user = data.rows[0];
    res.locals.user.apps = [];
    return next();
  });
};

module.exports = authController;
