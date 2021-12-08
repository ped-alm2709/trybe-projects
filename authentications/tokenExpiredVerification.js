const verifyToken = require('./verifyToken');

const tokenEpiredVerification = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  let payload;
  try {
    payload = verifyToken(token);
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.user = payload;
  next();
};

module.exports = tokenEpiredVerification;
