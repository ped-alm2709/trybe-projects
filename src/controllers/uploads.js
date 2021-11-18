const upload = require('../utils/upload');
const { update } = require('../services/upload');

const uploadImg = [
  upload.single('image'),
  async (req, res, next) => {
    const { id } = req.params;

    try {
      const setImage = await update(id);
      return res.status(setImage.status).json(setImage.message);
    } catch (err) {
      return next(err);
    }
  },
];

module.exports = uploadImg;
