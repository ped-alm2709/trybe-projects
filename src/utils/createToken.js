const jwt = require('jsonwebtoken');
const { secret, jwtConfig } = require('./tokenConfigs');

const createToken = (user) => {
  const { password: _, ...userWithoutPassword } = user;

  const token = jwt.sign(userWithoutPassword, secret, jwtConfig);

  return token;
};

module.exports = createToken;
