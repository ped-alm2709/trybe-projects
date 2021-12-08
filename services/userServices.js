const { Users } = require('../models');
const newToken = require('../authentications/createToken');

const createUserService = async (body) => {
  const { displayName, email, password, image } = body;
  await Users.create({ displayName, email, password, image });
  const token = newToken(email);
  return token;
};

const getAllUsersService = async () => Users.findAll({
  attributes: { exclude: ['password'] },
});

const getByIdService = async (id) => Users.findByPk(id);

module.exports = {
  createUserService,
  getAllUsersService,
  getByIdService,
};
