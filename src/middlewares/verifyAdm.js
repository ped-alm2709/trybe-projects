const { forbiddenMsg } = require('../utils/messages');

const verifyAdm = async (req, _res, next) => {
  const { user } = req;
  try {
    if (!user.role || user.role !== 'admin') throw forbiddenMsg;

    req.body.role = user.role;
    next();
  } catch (err) {
    return next(err);
  }
};

module.exports = verifyAdm;
