var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index);

/*GET product detail page */
router.get('/product/detail/:id/:category', indexController.productdetail);

module.exports = router;
