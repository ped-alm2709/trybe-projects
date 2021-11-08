const joi = require('joi');
const { HTTP_UNAUTHORIZED_STATUS } = require('../controllers/status');
const connection = require('../models/connection');

const validateData = (body) => (
  joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
  }).validate(body)
);

const validateEmail = async (req, res, next) => { 
  const { error } = validateData(req.body);
  const { email, password } = req.body;
  if (error) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'All fields must be filled' });
  }
  const db = await connection();
  const confirmUser = await db.collection('users').findOne({ email });
  console.log(confirmUser);
  if (!confirmUser || confirmUser.email !== email || confirmUser.password !== password) {
    return res
    .status(HTTP_UNAUTHORIZED_STATUS)
    .json({ message: 'Incorrect username or password' });
  }
  
  next();
};

module.exports = validateEmail;