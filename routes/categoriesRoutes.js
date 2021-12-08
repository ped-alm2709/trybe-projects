const express = require('express');
const tokenExpiredVerification = require('../authentications/tokenExpiredVerification');
const validateSchemas = require('../middlewares/validateSchemas');
const categoriesSchemas = require('../schemas/categoriesSchemas');
const categoriesControllers = require('../controllers/categoriesControllers');

const categoriesRoutes = express.Router();

categoriesRoutes
  .route('/')
  .post(
    tokenExpiredVerification, 
    validateSchemas(categoriesSchemas), 
    categoriesControllers.createCategoriesController,
    )
    .get(tokenExpiredVerification, categoriesControllers.getAllcategoriesControllers);

module.exports = categoriesRoutes; 
