const router = require('express').Router();

const { createSale, 
    getSalesByUser,
    getSaleById, 
    getSalesBySeller } = require('../controllers/salesController');
const { validateToken } = require('../middlewares/validateToken');

router.post('/', validateToken, createSale);
router.get('/:id', getSaleById);
router.get('/', validateToken, getSalesByUser);
router.get('/seller/:email', getSalesBySeller);

module.exports = router;
