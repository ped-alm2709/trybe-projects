const md5 = require('md5');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const User = require('../../database/models').user;

const createToken = (name, email, role) => {
  const key = fs.readFileSync('./jwt.evaluation.key', 'utf-8');
  const token = jwt.sign({ user: { name, email, role } }, key);
  return token;
};

const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password: md5(password) } });

    if (!user) throw new Error('Usuário ou senha inválidos');

    const { name, role } = user;
    const token = createToken(name, email, role);

    return { name, email, role, token };
};

const register = async ({ email, name, password }) => {
    const userEmail = await User.findOne({ where: { email } });
    const userName = await User.findOne({ where: { name } });

    if (userEmail || userName) throw new Error('Usuário cadastrado');
  
    User.create({ email, role: 'customer', name, password: md5(password) });
  
    const token = createToken(name, email, 'customer');
    return { name, email, role: 'customer', token };
};

const registerByAdm = async ({ email, name, password, role }) => {
  const userEmail = await User.findOne({ where: { email } });
  const userName = await User.findOne({ where: { name } });

  if (userEmail || userName) throw new Error('Usuário cadastrado');

  User.create({ email, role, name, password: md5(password) });
  
  return { name, email, role };
}

const getAllSellers = async () => User.findAll({ where: { role: 'seller' } });

const getAllUsers = async () => { 
  const users = await User.findAll();
  const withoutPassword = users
    .map(({ name, email, role, id }) => ({ name, email, role, id }));
  const withoutAdmins = withoutPassword.filter(({ role }) => role !== 'administrator');
  return withoutAdmins;
};

module.exports = {
  login,
  register,
  getAllSellers,
  getAllUsers,
  registerByAdm,
};