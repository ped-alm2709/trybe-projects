const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const User = require('../../database/models').user;

const createToken = async (name, email) => {
  const key = fs.readFileSync('./jwt.evaluation.key', 'utf-8');
  const token = jwt.sign({ user: { name, email } }, key);
  return token;
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password: md5(password) } });

    if (!user) throw new Error('Usuário ou senha inválidos');

    const token = createToken(user.name, email);

    return token;
};

const register = async ({ email, name, password }) => {
    const userEmail = await User.findOne({ where: { email } });
    const userName = await User.findOne({ where: { name } });

    if (userEmail || userName) throw new Error('Usuário cadastrado');
  
    User.create({ email, name, password: md5(password), role: 'customer' });
  
    const token = createToken(name, email);
    return token;
};

module.exports = {
  login,
  register,
};
