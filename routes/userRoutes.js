const express = require('express');
const validateSchemas = require('../middlewares/validateSchemas');
const userSchema = require('../schemas/usersSchemas');
const validateUser = require('../middlewares/validateUser');
const userController = require('../controllers/userControllers');
const tokenEpiredVerification = require('../authentications/tokenExpiredVerification');

const userRoutes = express.Router();

// / user;
userRoutes
  .route('/')
  .post(validateSchemas(userSchema), validateUser, userController.createUseController)
  .get(tokenEpiredVerification, userController.getAllUsersControllers);

// user/:id
userRoutes
  .route('/:id')
  .get(tokenEpiredVerification, userController.getByIdControllers);

module.exports = userRoutes;
