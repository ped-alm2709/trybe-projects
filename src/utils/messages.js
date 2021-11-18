const {
  INVALID_ENTRIES,
  DUPLICITY_EMAIL,
  FILLED_FIELDS,
  INCORRECT_LOGIN,
  INVALID_USER,
  RECIPE_FOUND,
  MISSING_TOKEN,
  ADMIN } = require('./errorMessages');
const { BAD_REQUEST, CONFLICT, UNAUTHORIZED, NOT_FOUND, FORBIDDEN } = require('./statusError');

const badRequest = { status: BAD_REQUEST, message: INVALID_ENTRIES };
const conflict = { status: CONFLICT, message: DUPLICITY_EMAIL };
const filledFields = { status: UNAUTHORIZED, message: FILLED_FIELDS };
const incorrectLogin = { status: UNAUTHORIZED, message: INCORRECT_LOGIN };
const invalidUser = { status: UNAUTHORIZED, message: INVALID_USER };
const notFound = { status: NOT_FOUND, message: RECIPE_FOUND };
const missingToken = { status: UNAUTHORIZED, message: MISSING_TOKEN };
const forbiddenMsg = { status: FORBIDDEN, message: ADMIN };

module.exports = {
  badRequest,
  conflict,
  filledFields,
  incorrectLogin,
  invalidUser,
  notFound,
  missingToken,
  forbiddenMsg,
};
