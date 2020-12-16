var validators = {
    "telefono": /^\+?\(?504\)?-?[1-9]\d{3}-?\d{4}$/,
    "correo": /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
    "isEmpty": /^\s*$/,
    "doublespace":/\s{2,}/,
    "titulo": /^[a-zA-Z]{5,15}$/
  };
  var formInputs = {
    txtName: null,
    txtEmail: null,
    txtNum: null,
    txtTitulo: null
  };
  
  var formInputsErrors = {
    txtName: null,
    txtEmail: null,
    txtNum: null,
    txtTitulo: null
  };
  
  document.addEventListener("DOMContentLoaded", function(e){
    formInputs.txtName = document.getElementById("txtName");
    formInputsErrors.txtName = document.getElementById("txtNameError");
    formInputs.txtEmail = document.getElementById("txtEmail");
    formInputs.txtNum = document.getElementById("txtNum");
    formInputs.txtTitulo = document.getElementById("txtTitulo");
    document.getElementById("formContactos").addEventListener("submit", validateForm);
  });
  
  function validateForm(e){
    e.preventDefault();
    e.stopPropagation();
    var errors = [];
    if (validators.isEmpty.test(formInputs.txtName.value)){
      errors.push("El Nombre NO puede ir vacío.");
    }
    if (validators.doublespace.test(formInputs.txtName.value)) {
      errors.push("No debe contener doble espacios entre valores");
    }
    if (!validators.correo.test(formInputs.txtEmail.value)) {
      errors.push("El correo no tiene el formato adecuado.");
    }
    if (!validators.telefono.test(formInputs.txtNum.value)) {
        errors.push("El numero de telefono no es aceptado.");
      }
    if (!validators.titulo.test(formInputs.txtTitulo.value)) {
        errors.push("El titulo NO puede ir vacio.");
      }
    if(errors.length > 0){
      alert(errors.join(" | "));
    } else {
      alert("Su mensaje ah sido enviado exitosamente, le contestaremos lo mas antes posible.");
    }
  }