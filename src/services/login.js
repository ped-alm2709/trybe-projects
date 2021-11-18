const verifyLogin = require('../authentications/verifyLogin');
const verifyMissingDataLogin = require('../authentications/verifyMissingDataLogin');
const createToken = require('../utils/createToken');
const { STATUS_OK } = require('../utils/statusSuccess');

const login = async (email, password) => {
  const verifyEmpty = await verifyMissingDataLogin(email, password);
  const validateLogin = await verifyLogin(verifyEmpty);
  const token = await createToken(validateLogin);
  return { status: STATUS_OK, message: { token } };
};

module.exports = login;
