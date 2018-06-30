let self = {}

const user = {
    usuario: 'paulanadal',
    password: 'argentina'
}

self.isLogged = false

self.authenticate = function (data) {
  if (data.user == user.usuario && data.pass == user.password ) {
    self.isLogged = true;
    return true;
  } else {
  	self.isLogged = false;
    return false;
  }
}


module.exports = self;