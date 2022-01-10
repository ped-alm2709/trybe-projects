const router = require('express').Router();

const { login, register, getAllSellers, getAllUsers } = require('../controllers/userController');

router.post('/login', login);
router.post('/register', register);
router.get('/sellers', getAllSellers);
router.get('/users', getAllUsers);

module.exports = router;
