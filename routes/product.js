const express = require('express');
const router = express.Router();

const product = require('../controllers/product');

const middleware = require('../middlewares/common-middleware')

router.get('/', middleware.noContentType, product.getProducts)
router.get('/:id/detail', middleware.noContentType, product.getProduct)

module.exports = router;