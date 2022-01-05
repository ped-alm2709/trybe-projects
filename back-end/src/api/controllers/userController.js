const userService = require('../services/userService');

const login = async (req, res) => {
    const response = await userService.login(req.body);

    if (response.error) {
      return res.status(404).json({ error: response.error });
    }

    return res.status(200).json({ token: response });
};

const register = async (req, res) => {
    const response = await userService.register(req.body);

    if (response.error) {
      return res.status(409).json({ error: response.error });
    }
  
    return res.status(201).json({ token: response });
};

module.exports = {
  login,
  register,
};
