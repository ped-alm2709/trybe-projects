const Sales = require('../../database/models').sales;

const getProducts = ({ seller, price, address }) => {
  const allProducts = Products.findAll();
  return allProducts;
};

module.exports = {
  getProducts,
};