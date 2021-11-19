const jwt = require('jsonwebtoken');
const { secret } = require('./tokenConfigs');

const createToken = (user) => {
  const { password: _, ...userWithoutPassword } = user;

  const token = jwt.sign(userWithoutPassword, secret);

  return token;
};

module.exports = createToken;
