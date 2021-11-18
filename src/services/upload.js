const { insertImage } = require('../models/uploads');
const { STATUS_OK } = require('../utils/statusSuccess');

const update = async (id) => {
  const insertImg = await insertImage(id);
  return { status: STATUS_OK, message: insertImg };
};

module.exports = update;
