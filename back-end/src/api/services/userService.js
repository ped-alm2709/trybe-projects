const md5 = require('md5');
const jwt = require('jsonwebtoken');

const User = require('../../database/models').user;

const { SECRET_KEY } = process.env;

const createToken = (name, email) => jwt.sign({ user: { name, email } }, SECRET_KEY);

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const hashPassword = (password) => md5(password);

const login = async ({ email, password }) => {
  try {
    const user = await User.findOne({ where: { email, password: md5(password) } });

    if (!user) {
      return { error: 'Usuário ou senha inválidos' };
    }
  
    const token = createToken(user.name, email);
  
    return token;
  } catch (error) {
    return { error: 'Usuário ou senha inválidos' }; 
  }
};

const register = async ({ email, name, password }) => {
  try {
    const user = await getUserByEmail(email);
    if (user) {
      return { error: 'Usuário cadastrado' };
    }
  
    const hashedPassword = hashPassword(password);
    User.create({ email, name, password: hashedPassword, role: 'customer' });
  
    const token = createToken(name, email);
    return token;
  } catch (error) {
    return { error: 'Usuário cadastrado' };
  }
};

module.exports = {
  login,
  register,
};
