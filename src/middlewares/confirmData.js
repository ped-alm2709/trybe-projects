const joi = require('joi');
const { HTTP_UNAUTHORIZED_STATUS } = require('../controllers/status');

const validateData = (body) => (
  joi.object({
    email: joi.string().required().email(),
    password: joi.string().required(),
  }).validate(body)
);

const confirmData = async (req, res, next) => { 
  const { error } = validateData(req.body);
  if (error) {
    return res.status(HTTP_UNAUTHORIZED_STATUS).json({ message: 'All fields must be filled' });
  }
  
  next();
};

module.exports = confirmData;