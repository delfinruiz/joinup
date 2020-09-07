$(document).ready(function() {

	    $('#sendMessageButton').click(function(event) {
        event.preventDefault();
			var nombre    =$("#name").val();
      var empresa   =$("#empresa").val();
      var email     =$("#email").val();
      var telefono  =$("#phone").val();
      var mensaje  =$("#message").val();

      var datos = {nombre, empresa, email, telefono, mensaje};

    $.ajax({
        type: "POST",
        url: "vendor/mail/contact_me.php",
        data: datos,

				success: function(respuesta) {

					if (respuesta == 'FALTAN DATOS!'){

					Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'No se pudo enviar Mensaje!',
					footer: 'Faltan datos por completar'
				});

					return false;

				

					}else{

						Swal.fire({
						icon: 'success',
						title: 'Exito',
						text: 'Su Mensaje fue enviado',
						footer: 'Gracias'


					});




					}
					$("#formEjemplo")[0].reset();
					return false;
				}

  });
    });
		    });
