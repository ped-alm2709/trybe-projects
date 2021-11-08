const jwt = require('jsonwebtoken');
const model = require('../models/users');
const validation = require('../services/authorization');
const {
  HTTP_OK_STATUS,
  HTTP_UNAUTHORIZED_STATUS,
  HTTP_BAD_REQUEST_STATUS,
} = require('./status');

const SECRET = '123456';

const login = async (req, res) => {
  try {
    const { error } = validation.login(req.body);
    if (error) {
      return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'All fields must be filled' });
    }
    const { email, password } = req.body;
    const verifyEmail = validation.emailValidator(email, password);
    if (verifyEmail) {
      return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: verifyEmail.message });
    }
    const user = await model.findUser(email);
    const { _id, email: alias, role } = user;
    const payload = { _id, alias, role };
    const token = jwt.sign(payload, SECRET);
    return res.status(HTTP_OK_STATUS).json({ token });
  } catch (err) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'Erro interno', error: err });
  }
};

module.exports = login;
