const createUser = require('../controllers/createUser');
const login = require('../controllers/login');
const { createRecipe } = require('../controllers/recipes');

module.exports = {
  createUser,
  login,
  createRecipe,
};