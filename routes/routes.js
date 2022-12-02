const { getAllProducts, getAllProductsStatic } = require('../controller/controller');

const router = require('express').Router();


router.route('/').get(getAllProducts)
router.route('/static').get(getAllProductsStatic)


module.exports = router;