// graywolf.js extension
$("select").on("change",function(){
    var o = this.value.toLowerCase();
    if (o == "otro" || o == "otros" || o == "otra" || o == "otras"){
        $(".otrodiv."+this.id).css("display","block");
        $(".otrodiv."+this.id+" input").attr("name",this.id);
        $(".otrodiv."+this.id+" input").attr("required","true");
    } else {
        $(".otrodiv."+this.id).css("display","none");
        $(".otrodiv."+this.id+" input").removeAttr("name");
        $(".otrodiv."+this.id+" input").removeAttr("required");
    }
});

$("input[type=radio]").on("change",function(){
    var o = this.value.toLowerCase();
    if (o == "otro" || o == "otros" || o == "otra" || o == "otras"){
        $(".otrodiv."+this.name).show("slow");
        $(".otrodiv."+this.name+" input").attr("name",this.name);
    } else {
        $(".otrodiv."+this.name).hide("slow");
        $(".otrodiv."+this.name+" input").removeAttr("name");
    }
});
// Fin: graywolf.js extension

$(".div").addClass("col-md-6");
$("input,  select, textarea").addClass("form-control");

$(".div input[type=radio], .div input[type=checkbox]").removeClass("form-control").removeClass("col-md-6").parent().css("width","100%");
