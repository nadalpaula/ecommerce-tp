$('.valButton').on('click' , function	(){
	let user = $('.user').val()
	let pass = $('.pass').val()
 console.log(user, pass)
$.ajax({
    method: "POST",
    url: "http://localhost:3000",
    data:{
    	user: user,
    	pass: pass,

    }
})
})
$('.user').val('')
$('.pass').val('')
