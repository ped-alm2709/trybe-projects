const userService = require('../services/userService');

const login = async (req, res) => {
  try {
    const response = await userService.login(req.body);

    res.status(201).json({ token: response });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  login,
};
