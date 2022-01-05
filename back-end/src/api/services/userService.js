const md5 = require('md5');
// const jwt = require('jsonwebtoken');
// const fs = require('fs');

const User = require('../../database/models').user;

// const createToken = async (name, email) => {
//   const key = fs.readFileSync('../../jwt.evaluation.key');
//   // console.log(key);
//   // jwt.sign({ user: { name, email } }, key);
//   return key;
// }

const getUserByEmail = async (email) => User.findOne({ where: { email } });

const hashPassword = (password) => md5(password);

const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password: md5(password) } });

    if (!user) {
      return { error: 'Usuário ou senha inválidos' };
    }

    // const token = createToken(user.name, email);

    return user;
};

const register = async ({ email, name, password }) => {
    const user = await getUserByEmail(email);
    if (user) {
      return { error: 'Usuário cadastrado' };
    }
  
    const hashedPassword = hashPassword(password);
    User.create({ email, name, password: hashedPassword, role: 'customer' });
  
    // const token = createToken(name, email);
    return user;
};

module.exports = {
  login,
  register,
};
