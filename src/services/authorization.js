const users = require('../models/users');
const { generateToken } = require('../middlewares/token');
const { HTTP_UNAUTHORIZED_STATUS } = require('../controllers/status');

const emailValidator = (email) => {
  const emailRegex = /^[0-9a-zA-Z._-]+@[a-z]*mail\.com(\.[a-z]{2})?$/;
  return emailRegex.test(email);
};

const login = async (email) => {
  if (!emailValidator(email)) {
    const err = new Error('Incorrect username or password');
    err.statusCode = HTTP_UNAUTHORIZED_STATUS;
    return err;
  }
  const loginOk = await users.findUser(email);
    if (!loginOk) {
      const err = new Error('Incorrect username or password');
      err.statusCode = HTTP_UNAUTHORIZED_STATUS;
      return err;
    }
    const tokenCreated = generateToken(loginOk);
    return tokenCreated;
};

const createAdmin = async (addAdmin, user) => {
  if (user.role !== 'admin') {
    const err = new Error('Only admins can register new admins');

    err.statusCode = 403;

    return err;
  }

  return user.createAdmin(addAdmin);
};

module.exports = {
  login,
  createAdmin,
  emailValidator,
};
