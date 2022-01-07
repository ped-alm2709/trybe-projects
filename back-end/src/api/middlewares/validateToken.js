const jwt = require('jsonwebtoken');
const fs = require('fs');

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  const key = fs.readFileSync('./jwt.evaluation.key', 'utf-8');
  try {
    jwt.verify(token, key);
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

module.exports = {
  validateToken,
};