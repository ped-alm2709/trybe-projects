const express = require('express');
const validateSchemas = require('../middlewares/validateSchemas');
const loginSchemas = require('../schemas/loginSchemas');
const validateLogin = require('../middlewares/validateLogin');

const loginRoutes = express.Router();

// /login
loginRoutes
  .route('/')
  .post(validateSchemas(loginSchemas), validateLogin);

module.exports = loginRoutes; 
