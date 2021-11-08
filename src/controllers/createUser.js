const joi = require('joi');
const model = require('../models/users');
const { CONFLICT, HTTP_BAD_REQUEST_STATUS, HTTP_CREATED_STATUS } = require('./status');

const verifyData = (body) => (
  joi.object({
    name: joi.string().required(),
    email: joi.string().required().email(),
    password: joi.string().required(),
  }).validate(body)
);

const createUser = async (req, res) => {
  const { error } = verifyData(req.body);
  
  if (error) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: 'Invalid entries. Try again.' });
  }

  const { name, email, password } = req.body;

  const verifyEmail = await model.findUser(email);
  if ((verifyEmail && verifyEmail.email) === email) {
    return res
    .status(CONFLICT)
    .json({ message: 'Email already registered' });
  }

  const registerNewUser = await model.createUser(name, email, password);
  const { password: _, ...userData } = registerNewUser;

  res.status(HTTP_CREATED_STATUS).json({ user: { ...userData, role: 'user' } });
};

module.exports = createUser;
