const verifyRecipe = require('../authentications/verifyRecipe');
const {
  createRecipe,
  getAllRecipes,
  findRecipeById,
  editRecipe,
  deleteRecipe,
  uploadImgModel,
} = require('../models/recipes');
const { notFound } = require('../utils/messages');
const { CREATED, STATUS_OK, NO_CONTENT } = require('../utils/statusSuccess');

const create = async (name, ingredients, preparation, user) => {
  const verifyEmptyFields = await verifyRecipe(name, ingredients, preparation);
  const createR = await createRecipe(verifyEmptyFields, user);
  const response = { recipe: { ...createR } };
  return { status: CREATED, message: response };
};

const getAll = async () => {
  const getRecipes = await getAllRecipes();
  return { status: STATUS_OK, message: getRecipes };
};

const findRecipe = async (id) => {
  const search = await findRecipeById(id);
  if (!search) throw notFound;
  return { status: STATUS_OK, message: search };
};

const update = async (id, obj, user) => {
  const updateRecipe = await editRecipe(id, obj, user);
  return { status: STATUS_OK, message: updateRecipe };
};

const deleted = async (id) => {
  const deleteR = await deleteRecipe(id);
  if (!deleteR) throw notFound;
  return { status: NO_CONTENT, message: '' };
};

const uploadImgService = async (id) => {
  const recipe = await uploadImgModel(id);
  if (!recipe) return null;
  return findRecipeById(id);
};

module.exports = {
  create,
  getAll,
  findRecipe,
  update,
  deleted,
  uploadImgService,
};
