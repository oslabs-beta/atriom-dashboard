const authController = {};

authController.getCurrentUser = (req, res, next) => {
  console.log('Hit AUTHCONTROLLER!!!!');
  return next();
};

module.exports = authController;
