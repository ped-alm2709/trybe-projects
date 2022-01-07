const salesController = require('../services/salesController');

const createSale = async (req, res) => {
  try {
    const response = salesController.createSale(req.body);
    res.status(200).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

module.exports = {
  createNewSale,
}