const router = require('express').Router();

const { createSale, 
    getSalesByUser,
    getSaleById, 
    getSalesBySeller,
    editSaleStatus } = require('../controllers/salesController');
const { validateToken } = require('../middlewares/validateToken');

router.post('/', validateToken, createSale);
router.get('/:id', getSaleById);
router.get('/', validateToken, getSalesByUser);
router.get('/seller/:email', getSalesBySeller);
router.post('/:id', editSaleStatus);

module.exports = router;
