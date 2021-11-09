const jwt = require('jsonwebtoken');
const users = require('../models/users');

const secret = '123deOliveira4';
const ID = '_id';

const emailValidator = (email) => {
  const emailRegex = /^[0-9a-zA-Z._-]+@[a-z]*mail\.com(\.[a-z]{2})?$/;
  return emailRegex.test(email);
};

const login = async (email) => {
  if (!emailValidator(email)) {
    const err = new Error('Incorrect username or password');
    err.statusCode = 401;
    return err;
  }

const loginOk = await users.findUser(email);
  if (!loginOk) {
    const err = new Error('Incorrect username or password');
    err.statusCode = 401;
    return err;
  }

  const payload = {
    userId: loginOk[ID],
    email,
    role: loginOk.role,
  };

  const token = jwt.sign(payload, secret);

  return { token };
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
