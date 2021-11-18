const jwt = require('jsonwebtoken');
const { HTTP_UNAUTHORIZED_STATUS } = require('../controllers/status');
const { findUser } = require('../models/users');

const secret = '123deOliveira4';
const jwtConfig = {
  expiresIn: '30m',
  algorithm: 'HS256',
};
const jwtError = { status: HTTP_UNAUTHORIZED_STATUS, message: 'jwt malformed' };

const generateToken = (data) => {
  const { password: _, ...userWithoutPass } = data;
  const token = jwt.sign(userWithoutPass, secret, jwtConfig);
  return token;
};

const validateToken = async (req, _res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  try {
    if (!token) throw jwtError;
    const verifyToken = jwt.verify(token, secret);
    const findEmailUser = await findUser(verifyToken.email);
    const { password, ...payload } = findEmailUser;
    req.user = payload;
    next();
  } catch (erro) {
    return next({ status: HTTP_UNAUTHORIZED_STATUS, message: erro.message });
  }
};

module.exports = {
  generateToken,
  validateToken,
};
