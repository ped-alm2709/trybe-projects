const verifyEmail = require('../authentications/verifyEmail');
const verifyName = require('../authentications/verifyName');
const verifyPassword = require('../authentications/verifyPassword');
const { createUser } = require('../models/users');
const { CREATED } = require('../utils/statusSuccess');

const create = async (name, email, password, role) => {
  const resName = await verifyName(name);
  const resEmail = await verifyEmail(email);
  const resPassword = await verifyPassword(password);
  const createU = await createUser(resName, resEmail, resPassword, role);
  const response = { user: { ...createU } };
  return { status: CREATED, message: response };
};

module.exports = create;
