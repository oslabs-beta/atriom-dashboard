const express = require('express');
const authController =
  process.env.NODE_ENV === 'testing'
    ? require('../controllers/authControllerTest')
    : require('../controllers/authController');

const router = express.Router();

router.get('/current-user', authController.getCurrentUser, (req, res) => {
  return res.status(200).json({ user: res.locals.user });
});

router.post('/signup', authController.createUser, (req, res) => {
  return res.status(200).json({ user: res.locals.user });
});

module.exports = router;
