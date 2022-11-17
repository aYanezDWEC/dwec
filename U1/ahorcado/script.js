//Vamos a jugar al ahorcado


//variables goblas
let booleanJoc = true;
let arrayParaulaAAdivinar = [];
let arrayGuions = [];

//Capturar elements html
//let començarPartida = document.getElementById('començarPartida');
let començarJoc = document.getElementById('començarJoc');
let lletraUsuari = document.getElementById('lletraUsuari');


//FUNCIONS

//Esta función enccuentra una palabra aleatoria de la array de la lista de palabras
function trobarParaula(){
    let llistaParaules = ['cabeza', 'coche', 'raton', 'mochila', 'murcielago', 'comida', 'manzana', 'caballo', 'corazón', 'dragon', 'perro', 'gato', 'acento', 'teclado', 'rey', 'reina', 'picas', 'papelera', 'sudadera', 'tenis', 'raqueta', 'almacen', 'platano', 'jefe', 'melsion', 'cable', 'usb' ];

    //Amb aquesta funció aconseguim trobar un nombre aleatori, aquest nombre aleatori serà el index de la taula de paraules
    let nombre = Math.floor(Math.random()*llistaParaules.length);
    paraulaAAdivinar = llistaParaules[nombre];
    console.log(paraulaAAdivinar);

    //Amaguem el botó de començar partida
    //començarPartida.hidden = true;
}

//En aquesta funció fiquem la paraula dins una array separada lletra a lletra
function separarLletres(){
    //ara ficarem la paraula separada per lletres en una array
    arrayParaulaAAdivinar = Array.from(paraulaAAdivinar);
    //console.log(arrayParaulaAAdivinar); 
    
    //amb aquest for fica guions a l'array de guions per cada lletra que hi ha
     for (let i=0; i<arrayParaulaAAdivinar.length; i++){
        arrayGuions[i] = '_';
    }

    console.log(arrayGuions);
}

function mostrarArrayGuions(){
    for(let i=0; i<arrayGuions.length; i++){
       document.write(arrayGuions[i] + " ");
    }

    booleanJoc = false;
}

function capturarLletra(){

}



function joc(){
    //primer trobem la paraula
    trobarParaula();

    //separem les lletres i emplenem l'array de guions
    separarLletres();
    
    //feim un doWhile amb una variable joc, que quan sigui false aturarà el joc
    do{
        //Cada vegada que entra mostrarà l'array de guions
        mostrarArrayGuions();

        //Le demana a l'usuari que entri una lletra
        document.write("<br>");
        document.write('<input type="lletra" id="lletraUsuari" placeholder="Escriu una lletra"></input>')
        


    } while (booleanJoc);


   
}


//EVENTS
//començarPartida.addEventListener('click', trobarParaula, false);
començarJoc.addEventListener('click', joc, false);