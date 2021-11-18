const { findEmail } = require('../models/users');
const { incorrectLogin } = require('../utils/messages');

const verifyLogin = async ({ email, password }) => {
  const existsEmail = await findEmail(email);

  if (!existsEmail || existsEmail.password !== password) throw incorrectLogin;

  return existsEmail;
};

module.exports = verifyLogin;
