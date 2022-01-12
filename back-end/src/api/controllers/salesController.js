const salesService = require('../services/salesService');

const createSale = async (req, res) => {
  try {
    const response = await salesService.createSale(req.body);
    res.status(201).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSalesByUser = async (req, res) => {
  try {
    const user = req.userId;
    const response = await salesService.getSalesByUser(user);
    res.status(201).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSalesBySeller = async (req, res) => {
  try {
    const { email } = req.params;
    const response = await salesService.getSalesBySeller(email);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await salesService.getSaleById(id);
    res.status(201).json({ response });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createSale,
  getSalesByUser,
  getSaleById,
  getSalesBySeller,
};