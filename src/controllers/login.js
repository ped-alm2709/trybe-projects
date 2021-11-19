const login = require('../services/login');

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validyUser = await login(email, password);

    return res.status(validyUser.status).json(validyUser.message);
  } catch (err) {
    return next(err);
  }
};

module.exports = loginUser;
