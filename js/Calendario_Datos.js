 // Este código lo que hace es encargarse de generar la información del calendario


 //libreria de este vato: https://github.com/nizarmah/calendar-javascript-lib

function CrearCalendario() {
        // Basic config
    var calendar = new Calendar("calendarContainer", "small",
        [ "Lunes", 3 ],
        [ "#E91E63", //color primario
        "#C2185B", // primary dark color
        "#FFFFFF", //text color
        "#F8BBD0" //text dark color
        ],
        {
            days: [ "Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes",  "Sabado" ],
            months: [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ],
            indicator: true,
            indicator_type: 1,
            indicator_pos: "bottom", // {top, bottom}
            placeholder: "<span>No hay evento este día</span>"
    });

    var data = {
        2023: {
            4: {
                // Semana 1
                17: [ //Lunes
                    {
                        startTime: "15:00",
                        endTime: "17:00",
                        text: "Inaguración",
                    },
                    
                ],
                18: [ //Martes
                    {
                        startTime: "12:00",
                        endTime: "13:00",
                        text: "Rodolfo"
                    },
                    {
                        startTime: "16:00",
                        endTime: "17:00",
                        text: "Manuel huescas"
                    }
                ],
                19: [//Miercoles
                    {
                        startTime: "15:00",
                        endTime: "18:00",
                        text: "Kevin"
                    }
                    
                ],
                20: [ //Jueves
                    {
                        startTime: "11:00",
                        endTime: "12:00",
                        text: "Fer ramirez"
                    },
                    {
                        startTime: "16:00",
                        endTime: "17:00",
                        text: "Jesus A"
                    },
                    {
                        startTime: "17:00",
                        endTime: "19:00",
                        text: "Bonilla 3D, ángel gonzalez Virtual"
                    }
                ],
                21: [ //Viernes
                    {
                        startTime: "11:00",
                        endTime: "15:00",
                        text: "VG"
                    }
                ],
                /////////////////////////////
                // Semana 2
                /////////////////////////////
                24: [ //Lunes
                    {
                        startTime: "16:00",
                        endTime: "17:00",
                        text: "DR Luque Vega, Luis Fernando"
                    }
                ],
                25: [ //Martes
                    
                ],
                26: [ //Miercoles
                    
                ],
                27: [ //Jueves
                    {
                        startTime: "11:00",
                        endTime: "12:00",
                        text: "Dra. Rocio Maciel"
                    },
                    {
                        startTime: "12:00",
                        endTime: "13:00",
                        text: "Dr. Vitor LArios"
                    },
                    {
                        startTime: "17:00",
                        endTime: "19:00",
                        text: "Tlaloc"
                    }
                ],
                28: [ //Viernes
                    {
                        startTime: "12:00",
                        endTime: "16:00",
                        text: "VG"
                    }
                ],
                
                
            },
            5: {
                /////////////////////////////
                // Semana 3
                /////////////////////////////
                1: [ //Lunes
                    
                ],
                2: [ //Martes
                    {
                        startTime: "11:00",
                        endTime: "12:00",
                        text: "Itzgal"
                    }
                ],
                3: [ //Miercoles
                    {
                        startTime: "11:00",
                        endTime: "13:00",
                        text: "Dra Aimee peréz Esparza"
                    }
                ],
                4: [ //Jueves
                    {
                        startTime: "11:00",
                        endTime: "13:00",
                        text: "Abraham Arce Moreno"
                    }
                ],
                5: [ //Viernes
                    {
                        startTime: "11:00",
                        endTime: "17:00",
                        text: "Talent"
                    }
                ],
                /////////////////////////////
                // Semana 4
                /////////////////////////////
                8: [ //Lunes
                    
                ],
                9: [ //Martes
                    {
                        startTime: "17:00",
                        endTime: "19:00",
                        text: "Marusia OL"
                    }
                ],
                10: [ //Miercoles
                    
                ],
                11: [ //Jueves
                    {
                        startTime: "17:00",
                        endTime: "18:00",
                        text: "fnd"
                    }
                ],
                12: [ //Viernes
                    {
                        startTime: "11:00",
                        endTime: "15:00",
                        text: "Final"
                    }
                ],
            }
            
        }
    };

    var organizer = new Organizer("organizerContainer", calendar, data);
    return organizer
}
var organizer =  CrearCalendario() //CREA EL OBJ DE ORGANIZADOR



// Inicializaciones 

// cambia esto de la prueba 1 para que pueda ser seleccionable de nuevo
var elemento = document.getElementById("Prueba_1")
elemento.className = "nav-link text-uppercase"; //regresa al estado anterior


// FUNCIONES y EVENTOS:

function cambiar_dia_detalles(){
    //función de click en una fecha del calendario
    var Dia = organizer.calendar.date.getDate();
    var Mes = organizer.calendar.date.getMonth();

    if (Mes == 3) { //Abril
        ////////////////////////////////////////SEMANA 1
        if (Dia == 17){ //Semana 1 - Lunes  DIA 1
            var elemento = document.getElementById("Prueba_1")
            elemento.click() ; //simula click DIA 1
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 18) {//Semana 1 - Martes DIA 2
            var elemento = document.getElementById("Prueba_2")
            elemento.click() ; //simula click 
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 19) {//Semana 1 - Miercoles DIA 3
            var elemento = document.getElementById("Prueba_3")
            elemento.click() ; //simula click 
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 20) {//Semana 1 - Jueves DIA 4
            var elemento = document.getElementById("Prueba_4")
            elemento.click() ; //simula click 
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 21) {//Semana 1 - Viernes DIA 5
            var elemento = document.getElementById("Prueba_5")
            elemento.click() ; //simula click 
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
            ////////////////////////////////////////SEMANA 2
        }else if (Dia == 24) {//Semana 2 - Lunes DIA 6
            var elemento = document.getElementById("Prueba_6")
            elemento.click() ; //simula click 
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 25) {//Semana 2 - Martes DIA 7
            var elemento = document.getElementById("Prueba_7")
            elemento.click() ; //simula click 
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 26) {//Semana 2 - Miercoles DIA 8
            var elemento = document.getElementById("Prueba_8")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 27) {//Semana 2 - Jueves DIA 9
            var elemento = document.getElementById("Prueba_9")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 28) {//Semana 2 - Viernes DIA 10
            var elemento = document.getElementById("Prueba_10")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }

    }else if (Mes==4) { //Mayo
        ////////////////////////////////////////SEMANA 3
        if (Dia == 1) {//Semana 3 - Lunes DIA 11
            var elemento = document.getElementById("Prueba_11")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 2) {//Semana 3 - Martes DIA 12
            var elemento = document.getElementById("Prueba_12")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 3) {//Semana 3 - Miercoles DIA 13
            var elemento = document.getElementById("Prueba_13")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 4) {//Semana 3 - Jueves DIA 14
            var elemento = document.getElementById("Prueba_14")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 5) {//Semana 3 - Viernes DIA 15
            var elemento = document.getElementById("Prueba_15")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
            /////////////////////SEMANA 4
        }else if (Dia == 8) {//Semana 4 - Lunes DIA 16
            var elemento = document.getElementById("Prueba_16")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 9) {//Semana 4 - Martes DIA 17
            var elemento = document.getElementById("Prueba_17")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 10) {//Semana 4 - Miercoles DIA 18
            var elemento = document.getElementById("Prueba_18")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 11) {//Semana 4 - Jueves DIA 19
            var elemento = document.getElementById("Prueba_19")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }else if (Dia == 12) {//Semana 4 - Viernes 20
            var elemento = document.getElementById("Prueba_20")
            elemento.click() ; //simula click
            elemento.className = "nav-link text-uppercase"; //regresa al estado anterior
        }
    }
}

organizer.setOnClickListener('days-blocks', // Se llama la fx cuando se da click en un día del calendario.
    function () {
        //función de click en una fecha del calendario
        cambiar_dia_detalles() ;
    }
); // de organizer setOnClick


function Cambio_Dia_Slider(){
    cambiar_dia_detalles() ;
}



organizer.setOnClickListener('day-slider', // Se llama la fx cuando se da click en un día del calendario.
    function () { //esta es la back callback
        //función de click en una fecha del calendario
        Cambio_Dia_Slider()
    },
    function () { //esta es la next callback
        //función de click en una fecha del calendario
        Cambio_Dia_Slider()
    }
); // de organizer setOnClick

/*
var sitio = window.location.href;
window.location.href =
*/