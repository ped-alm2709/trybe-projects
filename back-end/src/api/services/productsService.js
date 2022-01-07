const Products = require('../../database/models').product;

const getProducts = () => {
  const allProducts = Products.findAll();
  return allProducts;
};

module.exports = {
  getProducts,
};