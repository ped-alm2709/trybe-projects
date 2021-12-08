const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
  const tokenVerified = jwt.verify(token, process.env.JWT_SECRET);
  return tokenVerified;
};

module.exports = verifyToken;
