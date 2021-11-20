const userObj = {
  name: 'Pedro Almeida',
  email: 'pedro@teste.com',
  password: '123deOliveira4',
};

const adminObj = {
  name: 'pedro admin',
  email: 'pedroadm@teste.com',
  password: '123deOliveira45',
  role: 'admin',
};

const emailError = {
  email: 'ped@teste.com',
  password: '123deOliveira4',
};

const passwordError = {
  email: 'pedro@teste.com',
  password: 'senhaSuperSecreta',
};

const correctLogin = {
  email: 'pedro@teste.com',
  password: '123deOliveira4',
};

const correctLoginAdmin = {
  email: 'pedroadm@teste.com',
  password: '123deOliveira4A5',
};

const recipeObj = {
  name: 'Bolo de chocolate',
  ingredients: 'Trigo, chocolate, ovo, manteiga',
  preparation: '10 min no forno',
};

const recipeObjModify = {
  name: 'Bolo de morango',
  ingredients: 'Trigo, morango, ovo, manteiga',
  preparation: '10 min no forno',
};

module.exports = {
  userObj,
  adminObj,
  emailError,
  passwordError,
  correctLogin,
  correctLoginAdmin,
  recipeObj,
  recipeObjModify,
};
