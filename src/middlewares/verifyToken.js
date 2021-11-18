const jwt = require('jsonwebtoken');
const { findEmail } = require('../models/users');
const { invalidUser, missingToken } = require('../utils/messages');
const { UNAUTHORIZED } = require('../utils/statusError');
const { secret } = require('../utils/tokenConfigs');

const verifyToken = async (req, _res, next) => {
  const token = req.headers.authorization;

  try {
    if (!token) throw missingToken;

    const payload = jwt.verify(token, secret);
    const user = await findEmail(payload.email);

    if (!user) throw invalidUser;

    const { password, ...userWithoutPassword } = user;

    req.user = userWithoutPassword;
    next();
  } catch (err) {
    return next({ status: UNAUTHORIZED, message: err.message });
  }
};

module.exports = verifyToken;
