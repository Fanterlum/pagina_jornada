/// TODO: Agregar la funcion de otro en este documento para radio y checkbox

// label, id/name, class, tipo, value, required
function Item(label,id,classes,tipo,value,required){
  this.label = label;
  this.id = id;
  this.classes = classes;
  this.tipo = tipo;
  this.value = value;
  this.required = required;
}
Item.prototype.write = function(){
  this.id = this.id.replace(" ","_");

  var string = "";
  switch (this.tipo.toLowerCase()) {
    case "text":
      string = "<input type='"+this.tipo+"' id='"+this.id+"' name='"+this.id+"' class='"+this.classes+"' value='"+this.value+"' placeholder='"+this.id.toUpperCase()+"' "+this.required+" />";
    break;
    case "number":
      string = "<input type='"+this.tipo+"' id='"+this.id+"' name='"+this.id+"' class='"+this.classes+"' value='"+this.value+"' placeholder='"+this.id.toUpperCase()+"' />";
    break;
    case "email":
      string = "<input type='"+this.tipo+"' id='"+this.id+"' name='"+this.id+"' class='"+this.classes+"' value='"+this.value+"' placeholder='"+this.id.toUpperCase()+"' "+this.required+" />";
    break;
    case "password":
      string = "<input type='"+this.tipo+"' id='"+this.id+"' name='"+this.id+"' class='"+this.classes+"' value='"+this.value+"' placeholder='"+this.id.toUpperCase()+"' />";
    break;
    case "date":
      string = "<input type='"+this.tipo+"' id='"+this.id+"' name='"+this.id+"' class='"+this.classes+"' value='"+this.value+"' placeholder='"+this.id.toUpperCase()+"' />";
    break;
    case "textarea":
      string = "<textarea id='"+this.id+"' name='"+this.id+"' class='"+this.classes+"' value='"+this.value+"' placeholder='"+this.id.toUpperCase()+"'></textarea>";
    break;
    case "select":
      string = "<select id='"+this.id+"' name='"+this.id+"' class='"+this.classes+"' "+this.required+">";
      string += "<option value=''> --- Selecciona una opción --- </option>";
      this.value.split("|").forEach(function(item,index){
        string += "<option>"+item+"</option>";
      });
      string += "</select>";
    break;
    case "radio":
      string = "<div id='"+this.id+"'>";
      var tipo = this.tipo;
      var id = this.id;
      var required = this.required;
      this.value.split("|").forEach(function(item,index){
        string += "<div class='radio'><label class='label'><input type='"+tipo+"' name='"+id+"' value='"+item+"' "+required+" />&nbsp;"+item+"</label></div>";
      });
      string += "</div>";
    break;
    case "checkbox":
      string = "<div>";
      var tipo = this.tipo;
      var id = this.id;
      this.value.split("|").forEach(function(item,index){
        string += "<div class='checkbox'><label class='label'><input type='"+tipo+"' class='"+id+"' name='"+id+"[]' value='"+item+"' />&nbsp;"+item+"</label></div>";
      });
      string += "</div>";
    break;
    case "file":
      string = "<input type='"+this.tipo+"' id='"+this.id+"' name='"+this.id+"' class='"+this.classes+"' value='"+this.value+"' placeholder='"+this.id.toUpperCase()+"' />";
    break;
    case "likert":
      var id = this.id;
      var valores = this.value.split("|");
      string = "<div class='likert container row'><div class='col-md-"+(12-valores[1])+"'>&nbsp;</div>";
      for (var x = valores[0];x<=valores[1];x++){
        string += "<div class='col-md-1'>"+x+"</div>";
      }
      var x = 0;
      valores.forEach(function(item,index){
        if (++x > 2){
          string += "<div class='col-md-"+(12-valores[1])+"'>"+item+"</div>";
          for (var y = valores[0];y<=valores[1];y++){
            string += "<div class='radio col-md-1'><label><input type='radio' value='"+y+"' name='"+id+"_item"+(x-2)+"' /></label></div>";
          }
        }
      });
      string += "</div>";
    break;
  }

  var otra = "";
  if (this.tipo == "select" || this.tipo == "radio" || this.tipo == "checkbox"){
    var o = this.value.split("|")[this.value.split("|").length-1].toLowerCase();
    if (o == "otro" || o == "otros" || o == "otra" || o == "otras"){
      otra = "<div class='otrodiv "+this.id+"' style='display: none'>¿Cuál?<br/><input type=text /></div>";
    }
  }

  return "<div class='div "+this.id+" "+this.classes+"'><label>"+this.label+" "+((this.required)?"<span style='color:#E00;'>*</span>":"")+"</label><br/>"+string+""+otra+"</div>";
}
