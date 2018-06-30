let self = {}

const products = [{
        imagen: '../images/hola.jpg',
        titulo:'Hoola - Benefits',
        id: '1'
    },
    {
        imagen: '../images/iluminador.jpg',
        titulo:'Iluminador',
        id: '2'
    },
    {
        imagen: '../images/marcJacobs.jpg',
        titulo:'Base - Marc Jacobs',
        id: '3'

    },
    {
        imagen: '../images/nakedSkin.jpg',
        titulo:'Cubre Ojeras - Naked Skin',
        id: '4'
    },
    {
        imagen: '../images/pinceles.jpg',
        titulo:'Pinceles - Naked Skin',
        id: '5'
    },
    {
        imagen: '../images/pinceles2.jpg',
        titulo:'Pinceles - Naked Skin',
        id: '6'
    },
    {
        imagen: '../images/smashbox.jpg',
        titulo:'Primer - Smashbox',
        id: '7'

    }
]

self.showProducts = function() {
    return products
}

const user = {
    usuario: 'paulanadal',
    password: 'argentina'
}

self.authenticate = function (data) {
  if (data.username == user.username && data.password == user.password ) {
    return true;
  } else {
    return false;
  }
}

self.add = function(data){
    const pr = products.length
    const buscarId = products[pr - 1].id
    let user = data.user
    let pass = data.pass
    

    products.push({
        
        imagen: data.imagen,
        titulo: data.titulo,
        id: buscarId + 1,
    })
   return products 
}


module.exports = self;