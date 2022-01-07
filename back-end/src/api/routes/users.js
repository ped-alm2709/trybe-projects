const router = require('express').Router();

const { login, register, getAllSellers } = require('../controllers/userController');

router.post('/login', login);
router.post('/register', register);
router.get('/sellers', getAllSellers);

module.exports = router;
