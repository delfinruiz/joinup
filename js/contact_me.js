$(document).ready(function() {

	    $('#sendMessageButton').click(function(event) {
        event.preventDefault();
			var nombre    =$("#name").val();
      var empresa   =$("#empresa").val();
      var email     =$("#email").val();
      var telefono  =$("#phone").val();
      var mensaje  =$("#message").val();

      var datos = {nombre, empresa, email, telefono, mensaje};
console.log(datos);

//      $.ajax({
//        type: "POST",
  //        url: "vendor/mail/contact_me.php",
    //      data: datos,

  });
    });
