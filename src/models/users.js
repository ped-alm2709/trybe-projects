const connection = require('./connection');

const createUser = async (name, email, password) => {
  const db = await connection();
  const newUser = await db.collection('users').insertOne({ name, email, password });
  // O retorno de newUser vem em formato de array.
  // console.log(newUser);
  return newUser.ops[0];
};

const findUser = async (email) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email });
  return user;
};

const createAdmin = async (addAdmin, user) => {
  if (user.role !== 'admin') {
    const err = new Error('Only admins can register new admins');
    err.statusCode = 403;
    return err;
  }
  return user.createAdmin(addAdmin);
};

module.exports = {
  createUser,
  findUser,
  createAdmin,
};