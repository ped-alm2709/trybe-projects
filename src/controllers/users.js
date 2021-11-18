const create = require('../services/users');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password, role = 'user' } = req.body;
    const validyUser = await create(name, email, password, role);

    return res.status(validyUser.status).json(validyUser.message);
  } catch (err) {
    return next(err);
  }
};

module.exports = createUser;
