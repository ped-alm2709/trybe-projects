const router = require('express').Router();

const { createSale, getSalesByUser } = require('../controllers/salesController');
const { validateToken } = require('../middlewares/validateToken');

router.post('/', validateToken, createSale);
router.get('/', validateToken, getSalesByUser);

module.exports = router;
