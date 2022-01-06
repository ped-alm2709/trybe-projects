const router = require('express').Router();

const { getProducts } = require('../controllers/productsController');

router.post('/', getProducts);

module.exports = router;
