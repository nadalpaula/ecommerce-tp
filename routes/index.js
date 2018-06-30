var express = require('express');
var router = express.Router();


const productsController = require('../controllers/productsController')
const addController = require('../controllers/addController')
/* GET home page. */
router.get('/', productsController.home)
router.get('/', productsController.auth)
router.post('/', productsController.authenticate)

router.get('/add', function (req, res) {
  res.render('add');
})

router.post('/add', addController.add)

module.exports = router;
