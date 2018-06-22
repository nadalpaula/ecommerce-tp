let self = {}

const productsService = require ('../services/productsService.js')

self.home = function(req,res){
	res.render('index', {
        products: productsService.showProducts
    })
    };




module.exports = self;