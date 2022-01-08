const router = require('express').Router();

const { createSale, getSalesByUser, getSaleById } = require('../controllers/salesController');
const { validateToken } = require('../middlewares/validateToken');

router.post('/', validateToken, createSale);
router.get('/:id', getSaleById);
router.get('/', validateToken, getSalesByUser);

module.exports = router;
