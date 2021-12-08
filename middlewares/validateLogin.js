const { Users } = require('../models');
const newToken = require('../authentications/createToken');

const validateLogin = async (req, res) => {
  const { email: userEmail } = req.body;
  const user = await Users.findOne({
    where: { email: userEmail },
  });
  if (!user) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const token = newToken(userEmail);
  return res.status(200).json({ token });
};

module.exports = validateLogin; 