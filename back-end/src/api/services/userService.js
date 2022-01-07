const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const User = require('../../database/models').user;

const createToken = (name, email) => {
  const key = fs.readFileSync('./jwt.evaluation.key', 'utf-8');
  const token = jwt.sign({ user: { name, email } }, key);
  return token;
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password: md5(password) } });

    if (!user) throw new Error('Usuário ou senha inválidos');

    const { name, role } = user;

    const token = createToken(name, email);

    return { name, email, role, token };
};

const register = async ({ email, name, password }) => {
    const userEmail = await User.findOne({ where: { email } });
    const userName = await User.findOne({ where: { name } });

    if (userEmail || userName) throw new Error('Usuário cadastrado');
  
    User.create({ email, role: 'customer', name, password: md5(password) });
  
    const token = createToken(name, email);
    return { name, email, role: 'customer', token };
};

const getAllSellers = async () => User.findAll({ where: { role: "seller" } });

module.exports = {
  login,
  register,
  getAllSellers,
};