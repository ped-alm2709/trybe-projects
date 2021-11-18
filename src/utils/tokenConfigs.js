const secret = '123deOliveira4';
const jwtConfig = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

module.exports = {
  secret,
  jwtConfig,
};
