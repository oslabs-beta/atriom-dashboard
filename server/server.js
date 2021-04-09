const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const appsDb = require('./db/apps');
// const App = require('./models/AppModel');
const User = require('./models/UserModel');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

const authRouter = require('./routes/auth');

app.use('/auth', authRouter);

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
