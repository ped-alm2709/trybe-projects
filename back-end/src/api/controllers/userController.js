const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const response = await userService.login(req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const register = async (req, res) => {
  try {
    const response = await userService.register(req.body);
    res.status(201).json(response);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};

module.exports = {
  login,
  register,
};
