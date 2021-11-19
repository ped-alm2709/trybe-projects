// const path = require('path');
const multer = require('multer');

// Ajuda de Anderson Silva - Turma 11
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, 'src/uploads');
  },
  filename: (req, _file, callback) => {
    const { id } = req.params;
    const nameFile = `${id}.jpeg`;
    callback(null, nameFile);
  },
});

/* const upload = multer({
  dest: path.join(__dirname, '..', 'uploads'),
}); */

const upload = multer({ storage }).single('image');

module.exports = upload;
