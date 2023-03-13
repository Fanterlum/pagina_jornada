$(".div input, .div textarea").attr("placeholder","");

// Ajuste telefono
$("#telefono, #telefono2, #telefono3").attr("min","1111111111").attr("max","9999999999");
/*
document.querySelector("#telefono").setCustomValidity('Por favor ingresa un número de 10 digitos');
document.querySelector("#telefono2").setCustomValidity('Por favor ingresa un número de 10 digitos');
document.querySelector("#telefono3").setCustomValidity('Por favor ingresa un número de 10 digitos');
*/

// Descripción
document.querySelector("#descripcion").rows = 7;

// Documento
document.querySelector("#postulacion").accept = ".pdf";


$("#postulacion, #descripcion").attr("required","true");

function verify(e){
  e.preventDefault();

  form = document.querySelector("#form");
  email = document.querySelector("#correo").value;

  fetch("/registro_premio/consulta/api/?email="+email)
    .then(response=>response.json())
    .then(json=>{
      if (json==null){
	form.submit();
      } else {
	alert("Este correo electrónico ya ha sido registrado.\nPuede enviar un correo a innovaforum@udg.mx para más información");
      }
    });
}
