const { Categories } = require('../models');

const createCategoriesServices = async (body) => {
  const { name } = body;
  return Categories.create({ name });
};

const getAllcategoriesServices = async () => Categories.findAll();

module.exports = {
  createCategoriesServices,
  getAllcategoriesServices,
};
