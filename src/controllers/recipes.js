const { create, getAll, findRecipe, update, deleted } = require('../services/recipes');

const createRecipe = async (req, res, next) => {
  const { user } = req;
  const { name, ingredients, preparation } = req.body;
  try {
    const validyRecipe = await create(name, ingredients, preparation, user);

    return res.status(validyRecipe.status).json(validyRecipe.message);
  } catch (err) {
    return next(err);
  }
};

const getAllRecipes = async (_req, res, next) => {
  try {
    const getRecipes = await getAll();

    return res.status(getRecipes.status).json(getRecipes.message);
  } catch (err) {
    return next(err);
  }
};

const getRecipeById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const getRecipe = await findRecipe(id);

    return res.status(getRecipe.status).json(getRecipe.message);
  } catch (err) {
    return next(err);
  }
};

const editRecipe = async (req, res, next) => {
  const { user } = req;
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;
  const newValues = { name, ingredients, preparation };

  try {
    const setRecipe = await update(id, newValues, user);

    return res.status(setRecipe.status).json(setRecipe.message);
  } catch (err) {
    return next(err);
  }
};

const deleteRecipe = async (req, res, next) => {
  const { id } = req.params;

  try {
    const delRecipe = await deleted(id);

    return res.status(delRecipe.status).json(delRecipe.message);
  } catch (err) {
    return next(err);
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  editRecipe,
  deleteRecipe,
};