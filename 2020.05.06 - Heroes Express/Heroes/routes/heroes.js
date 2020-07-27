var express = require('express');
var router = express.Router();
const heroesController = require('../controllers/heroesController')

/* GET users listing. */
router.get('/', heroesController.listado);

module.exports = router;
