const Joi = require('joi');
const { findEmail } = require('../models/users');
const { badRequest, conflict } = require('../utils/messages');

const verifyEmail = async (email) => {
  const schema = Joi.string().required().email();

  const { error } = schema.validate(email);

  if (error) throw badRequest;

  const existsEmail = await findEmail(email);

  if (existsEmail) throw conflict;

  return email;
};

module.exports = verifyEmail;
