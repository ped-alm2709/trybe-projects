const router = require('express').Router();

const { createSale } = require('../controllers/salesController');
const { validateToken } = require('../middlewares/validateToken');

router.post('/', validateToken, createSale);

module.exports = router;
