const Products = require('../../database/models').products;

const getProducts = () => {
  const allProducts = Products.findAll();
  return allProducts;
};

module.exports = {
  getProducts,
};