const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

// const authRouter = require('./routes/auth');

// app.use('/auth', authRouter);
if (process.env.NODE_ENV === 'prod') {
  app.use('/build', express.static(path.join(__dirname, '../build/')));

  app.get('*', (req, res) =>
    res.status(200).sendFile(path.join(__dirname, '../index.html'))
  );
}

app.get('*', (req, res) => {
  return res.status(404).json();
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: 'An error occurred',
  };
  const error = { ...defaultErr, ...err };
  return res.status(error.status).json(error.message);
});

module.exports = app.listen(port, () =>
  console.log(`Listening on port ${port}`)
);
