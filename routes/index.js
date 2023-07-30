var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index.get );
router.get('/detalle/:id', indexController.detalle.get );

module.exports = router;
