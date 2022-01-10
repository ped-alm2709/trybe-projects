const router = require('express').Router();

const {
  login,
  register,
  getAllSellers,
  getAllUsers,
  registerByAdm,
 } = require('../controllers/userController');

 const { validateToken } = require('../middlewares/validateToken');

router.post('/login', login);
router.post('/register', register);
router.get('/sellers', getAllSellers);
router.get('/users', getAllUsers);
router.post('/register/adm', validateToken, registerByAdm);

module.exports = router;
