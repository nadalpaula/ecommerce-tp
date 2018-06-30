let self = {}
const auth = require('../services/loginService')
const productsService = require ('../services/productsService.js')

self.home = function(req,res){
	res.render('index', {
        products: productsService.showProducts
    })
    };

self.auth = function(req, res) {
  res.render('auth')
}

self.authenticate = function(req, res) {
  const body = req.body
    if (body.usuario && body.password) {
      const ValidAuth = auth.authenticate(body);
      if (ValidAuth == true) {
        auth.updateStatus(ValidAuth);
        res.sendStatus(302)
      } else {
          res.sendStatus(400);}
    } 
}




module.exports = self;