$('.add').on('click', function(){
	let user = $('.user').val()
	let pass = $('.pass').val()
	let titulo = $('.nombre').val()
  let imagen = $('.imagen').val()
$.ajax({
    method: "POST",
    url: "http://localhost:3000/add",
    data:{
    	user: user,
    	pass: pass,
    	titulo: titulo,
      imagen: imagen
    }
})
})
$('.user').val('')
$('.pass').val('')
$('.nombre').val('')
$('.imagen').val('')