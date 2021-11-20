const userObj = {
  name: 'Andy Silva',
  email: 'andy@teste.com',
  password: 'senhaSuperSecretaAndy',
};

const adminObj = {
  name: 'Andy admin',
  email: 'andyAdmin@teste.com',
  password: 'senhaSuperSecretaAndyAdmin',
  role: 'admin',
};

const emailError = {
  email: 'and@teste.com',
  password: 'senhaSuperSecretaAndy',
};

const passwordError = {
  email: 'andy@teste.com',
  password: 'senhaSuperSecreta',
};

const correctLogin = {
  email: 'andy@teste.com',
  password: 'senhaSuperSecretaAndy',
};

const correctLoginAdmin = {
  email: 'andyAdmin@teste.com',
  password: 'senhaSuperSecretaAndyAdmin',
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
