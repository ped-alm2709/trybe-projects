const Joi = require('joi');
const { filledFields } = require('../utils/messages');

const verifyMissingDataLogin = (email, password) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate({ email, password });

  if (error) throw filledFields;

  return { email, password };
};

module.exports = verifyMissingDataLogin;
