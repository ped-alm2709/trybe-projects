const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const createUser = require('../controllers/users');
const verifyAdm = require('../middlewares/verifyAdm');

const router = express.Router();

router.post('/', createUser);
router.post('/admin', verifyToken, verifyAdm, createUser);

module.exports = router;
