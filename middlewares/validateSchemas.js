const validateBody = (body, schema) => {
  const validate = schema.validate(body);
  if (validate.error) {
    const errorDetails = validate.error.details.map((data) => data.message);
    const [errorMessage] = errorDetails;
    return errorMessage;
  }
  return null;
};

const validateSchemas = (schema) => (req, res, next) => {
  const errorMessage = validateBody(req.body, schema);
  if (!errorMessage) return next();
  return res.status(400).json({ message: errorMessage });
};

module.exports = validateSchemas;
