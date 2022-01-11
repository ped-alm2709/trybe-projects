const router = require('express').Router();

const {
  login,
  register,
  getAllSellers,
  getAllUsers,
  registerByAdm,
  deleteUser,
 } = require('../controllers/userController');

 const { validateToken } = require('../middlewares/validateToken');

router.post('/login', login);
router.post('/register', register);
router.get('/sellers', getAllSellers);
router.get('/users', getAllUsers);
router.post('/register/adm', validateToken, registerByAdm);
router.delete('/:email', validateToken, deleteUser);

module.exports = router;
