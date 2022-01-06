const productsService = require('../services/productsService');

const getProducts = async (_req, res) => {
  try {
    const response = await productsService.getProducts();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
};
