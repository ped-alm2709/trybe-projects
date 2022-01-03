const md5 = require("md5");
const jwt = require("jsonwebtoken");

const User = require("../../database/models").user;

const { SECRET_KEY } = process.env;

const createToken = (name, email, id) => {
  const token = jwt.sign({ user: { name, email, id } }, SECRET_KEY);
  return token;
};

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const validPassword = async (password, hashedPassword) => {
  const hashPassword = md5(password);
  return hashPassword === hashedPassword;
};

const login = async ({ email, password }) => {
  const user = await getUserByEmail(email);

  if (!user) throw new Error("Usuário ou senha incorretos");

  const { password: userPassword, id, name } = user;

  if (!validPassword(password, userPassword)) {
    throw new Error("Senha incorreta");
  }

  const token = createToken(name, email, id);

  return token;
};

module.exports = {
  login,
};
