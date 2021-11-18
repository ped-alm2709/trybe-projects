const joi = require('joi');
const { createRecipe } = require('../models/recipes');
const {
  HTTP_BAD_REQUEST_STATUS,
  HTTP_CREATED_STATUS,
} = require('../controllers/status');

const verifyRecipe = (data) => (
  joi.object({
    name: joi.string().required(),
    ingredients: joi.string().required(),
    preparation: joi.string().required(),
  }).validate(data)
);

const erroRecipe = { status: HTTP_BAD_REQUEST_STATUS, message: 'Invalid entries. Try again.' };

const insertRecipe = async (body) => {
  const { _id, ...data } = body;
  const { error } = await verifyRecipe(data);
  if (error) {
    throw erroRecipe;
  }
  const postRecipe = await createRecipe(body);
  return { status: HTTP_CREATED_STATUS, message: { recipe: postRecipe } };
};

module.exports = {
  insertRecipe,
};