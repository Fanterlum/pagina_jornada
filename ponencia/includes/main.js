$(".div input, .div textarea").attr("placeholder","");

// Presentación de libro ajustes
function libro (activo){
    if (!activo){
        $("input.libro").attr("disabled","true");
        $(".div.libro").hide();
    } else {
        $("input.libro").removeAttr("disabled");
        $(".div.libro").show();
    }
}
libro(false);

// Institución
$("select[id^=universidad]").attr("disabled","true");
$("div[class^='div universidad']").css("visibility","hidden");
$("select[id^=institucion]").on("change",function(){
    var u = (this.id.length==11)?"universidad":"universidad"+this.id.slice(-1);
    if (this.value == "Universidad de Guadalajara"){
        $("select#"+u).removeAttr("disabled");
        $(".div."+u).css("visibility","visible");
    } else {
        $("select#"+u).val("");
        $("select#"+u).attr("disabled","true");
        $(".div."+u).css("visibility","hidden");
    }
});

// File
file_text = [
  ".doc, .docx, .odt, .pdf, .ppt, .pptx, .odp",
  ".jpg, .png, .ppt, .pptx, .odp, .pdf",
  ".ppt, .pptx, .odp, .pdf"
];
document.querySelector(".div.ponencia label small").innerHTML = `(${file_text[0]})`;
$("input#ponencia").attr("accept",file_text[0]);
document.querySelector("select#modalidad").addEventListener("change",function(){
    // document file types
    var label = document.querySelector(".div.ponencia label small");
    if (this.value == "Poster"){
        label.innerHTML = `(${file_text[1]})`;
        $("input#ponencia").attr("accept",file_text[1]);
    } else {
        label.innerHTML = `(${file_text[0]})`;
        $("input#ponencia").attr("accept",file_text[0]);
    }

    // Presentació de libro ajustes
    if (this.value == "Presentación de libro"){
        $("#mesa").attr("disabled","true");
        libro(true);
    } else {
        $("#mesa").removeAttr("disabled");
        libro(false);
    }
    
    // Video / Podcast
    if (this.value == "Video / Podcast"){
      document.querySelector("#ponencia").type = "text";
      document.querySelector("div.ponencia label").innerHTML = "Liga / URL<br/><small>Suba su video/podcast a YouTube u otro medio e inserte la liga/url</small> <span style='color:#E00;'>*</span>";
    } else {
      document.querySelector("div.ponencia label").innerHTML = "Subir documento<br/><small>("+file_text[0]+")</small> <span style='color:#E00;'>*</span>";
      document.querySelector("#ponencia").type = "file";
    }

    // Innova Talk / Charla relampago
    if (this.value == "Innova Talks (Charlas relámpago)"){
      $(".ep2, .p2, .ep3, .p3, .ep4, .p4").hide();
      $(".cr").show();
      label.innerHTML = `(${file_text[2]})`;
      $("input#ponencia").attr("accept",file_text[2]);
    } else {
      $(".ep2, .p2, .ep3, .p3, .ep4, .p4").show();
      $(".p2, .p3, .p4").hide();
      $(".cr").hide();
      label.innerHTML = `(${file_text[0]})`;
      $("input#ponencia").attr("accept",file_text[0]);
    }
});

file_image = ".jpg, .png, .pdf";
$("input#legal, input#portada").attr("accept",file_image);

// Ajuste telefono
$("#telefono, #telefono2, #telefono3").attr("min","1111111111").attr("max","9999999999");
/*
document.querySelector("#telefono").setCustomValidity('Por favor ingresa un número de 10 digitos');
document.querySelector("#telefono2").setCustomValidity('Por favor ingresa un número de 10 digitos');
document.querySelector("#telefono3").setCustomValidity('Por favor ingresa un número de 10 digitos');
*/

// Ponentes
p2 = false;
$(".ep2 label").on("click",function(){
    if (!p2) {
        $(".ep2 label span").html("▼");
        $(".p2").show();
    } else {
        $(".ep2 label span").html("►");
        $(".p2").hide();
    }
    p2 = !p2;
});

p3 = false;
$(".ep3 label").on("click",function(){
    if (!p3) {
        $(".ep3 label span").html("▼");
        $(".p3").show();
    } else {
        $(".ep3 label span").html("►");
        $(".p3").hide();
    }
    p3 = !p3;
});

p4 = false;
$(".ep4 label").on("click",function(){
    if (!p4) {
        $(".ep4 label span").html("▼");
        $(".p4").show();
    } else {
        $(".ep4 label span").html("►");
        $(".p4").hide();
    }
    p4 = !p4;
});

$("#ponencia").attr("required","true");

function verify(e){
  e.preventDefault();

  form = document.querySelector("#form");
  email = document.querySelector("#correo").value;

  fetch("/ponencia/consulta/api/?email="+email)
    .then(response=>response.json())
    .then(json=>{
      if (json.length < 3){
	form.submit();
      } else {
	alert("Ya ha enviado 3 propuestas.\nPuede enviar un correo a innovaforum@udg.mx para más información");
      }
    });
}

// Charla relampago
$(".cr").hide();
