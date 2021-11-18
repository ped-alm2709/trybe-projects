const { insertRecipe } = require('../services/recipes');

const createRecipe = async (req, res, next) => {
  const { user } = req;
  const { name, ingredients, preparations } = req.body;
  const { _id } = user;
  try {
    const validRecipe = await insertRecipe({ _id, name, ingredients, preparations });
    return res.status(validRecipe.status).json(validRecipe.message);
  } catch (erro) {
    return next(erro);
  }
};

module.exports = {
  createRecipe,
};