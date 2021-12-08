const Joi = require('joi');

const categoriesSchema = Joi.object({
  name: Joi.string().not().empty()
    .required(),
});

module.exports = categoriesSchema;
