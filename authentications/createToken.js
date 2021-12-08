const jwt = require('jsonwebtoken');

const createToken = (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET);
  return token;
};

module.exports = createToken;
