const router = require('express').Router();

const { getProducts } = require('../controllers/productsController');

router.get('/', getProducts);

module.exports = router;
