//Vamos a jugar al ahorcado

//variables goblas
let booleanJoc = true;
let arrayParaulaAAdivinar = [];
let arrayGuions = [];
let lletraUsuari;

//Capturar elements html
//let començarPartida = document.getElementById('començarPartida');
let començarJoc = document.getElementById('començarJoc');

//FUNCIONS

//Esta función enccuentra una palabra aleatoria de la array de la lista de palabras
function trobarParaula(){
    let llistaParaules = ['cabeza', 'coche', 'raton', 'mochila', 'murcielago', 'comida', 'manzana', 'caballo', 'corazón', 'dragon', 'perro', 'gato', 'acento', 'teclado', 'rey', 'reina', 'picas', 'papelera', 'sudadera', 'tenis', 'raqueta', 'almacen', 'platano', 'jefe', 'melsion', 'cable', 'usb' ];

    //Amb aquesta funció aconseguim trobar un nombre aleatori, aquest nombre aleatori serà el index de la taula de paraules
    let nombre = Math.floor(Math.random()*llistaParaules.length);
    paraulaAAdivinar = llistaParaules[nombre];
    console.log(paraulaAAdivinar);
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

//feim un for imprimint la paraula secreta lletra a lletra
function mostrarArrayGuions(){
    for(let i=0; i<arrayGuions.length; i++){
       document.write(arrayGuions[i] + " ");
    }
    document.write("<br>");
}

//capturem la lletra de l'usuari.
//demanem que pitji una tecla del teclat i la capturem amb l'event keydown
function capturarLletra(e){
    if((e.keyCode > '64' && e.keyCode <= "90") || e.keyCode == "220"){
       document.write("Has triat la lletra: " + e.key.toUpperCase());
    }
    lletraUsuari = e.key;
    console.log(lletraUsuari);

    compararLletra();
    mostrarArrayGuions();
    document.write("Escriu una lletra amb el teclat de la A a la Z" + "<br>");

 }
//comparem que la lletra que entra l'usuari està dins de l'array de la paraula secreta, o no
function compararLletra(){
    for(let i=0; i<=arrayParaulaAAdivinar.length; i++){
        if(lletraUsuari == arrayParaulaAAdivinar[i]){
            arrayGuions[i] = lletraUsuari.toUpperCase();
        }
    }
    document.write("<br>");
}


function joc(){
    //primer trobem la paraula
    trobarParaula();

    //separem les lletres i emplenem l'array de guions
    separarLletres();

    //feim un doWhile amb una variable joc, que quan sigui false aturarà el joc
    let a = 0;
    
    //Cada vegada que entra mostrarà l'array de guions
    mostrarArrayGuions();

    //Le demana a l'usuari que entri una lletra amb keydown
    document.write("Escriu una lletra amb el teclat de la A a la Z" + "<br>");
    document.addEventListener('keydown', capturarLletra);
         
   

}


//EVENTS
//començarPartida.addEventListener('click', trobarParaula, false);
començarJoc.addEventListener('click', joc, false);