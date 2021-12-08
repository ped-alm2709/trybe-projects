const categoriesServices = require('../services/categoriesServices');

const createCategoriesController = async (req, res) => {
  const categorie = await categoriesServices.createCategoriesServices(req.body);
  return res.status(201).json(categorie);
};

const getAllcategoriesControllers = async (_req, res) => {
  const categories = await categoriesServices.getAllcategoriesServices();
  return res.status(200).json(categories);
};

module.exports = {
  createCategoriesController,
  getAllcategoriesControllers,
};