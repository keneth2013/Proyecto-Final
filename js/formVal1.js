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
    txtTitulo: null
  };
  
  var formInputsErrors = {
    txtName: null,
    txtEmail: null,
    txtTitulo: null
  };
  
  document.addEventListener("DOMContentLoaded", function(e){
    
    var formularios = document.getElementsByTagName("form");
    for(var i =0; i<formularios.length;i++){
      formularios[i].addEventListener("submit", validateForm);
    }
  });
  

  function validateForm(e){
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target);

    console.log(e.target.querySelector('input[name="estrellas"]'));
    var txtName = e.target.querySelector('input[name="txtName"]');
    var txtEmail = e.target.querySelector('input[name="txtEmail"]');
    var txtTitulo = e.target.querySelector('input[name="txtTitulo"]');
    var errors = [];
    if (validators.isEmpty.test(txtName.value)){
      errors.push("El Nombre NO puede ir vacío.");
    }
    if (validators.doublespace.test(txtName.value)) {
      errors.push("No debe contener doble espacios entre valores");
    }
    if (!validators.correo.test(txtEmail.value)) {
      errors.push("El correo no tiene el formato adecuado.");
    }
    if (!validators.titulo.test(txtTitulo.value)) {
        errors.push("El titulo NO puede ir vacio.");
      }
    if(errors.length > 0){
      alert(errors.join(" | "));
    } else {
      alert("Gracias por su valoracion, eso nos hace mejorar cada dia.");
    }
  }
