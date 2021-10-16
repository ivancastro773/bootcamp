$('#formlogin').submit(function(e) {
  e.preventDefault();
  var name = $.trim($("#name").val());
  var email = $.trim($("#email").val());
  var province = $.trim($("#province").val());
  var message = $.trim($("#message").val());
    console.log(name);
    console.log(email);
    console.log(province);
    console.log(message);
    if (name.length == "" || email.length == "" || province.length == "" || message.length == "") {
      Swal.fire({
        title: 'Error!',
        text: 'Campos vacíos, por favor complete todos los campos',
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }else{
      Swal.fire({
        title: 'Está seguro de enviar el email?',
        text: "si desea cambiar los datos ingresados, presione cancelar.",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí,enviar!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Email enviado!',
            'Pronto nos contactaremos con usted',
            'success'
          )
        }
      })
    }
 
    
  
  
})