//Vamos a jugar al ahorcado

//variables goblas
let booleanJoc = true;
let arrayParaulaAAdivinar = [];
let arrayGuions = [];
let lletraUsuari;
let arrayLletresErroneas = [];
let indexLletresErroneas = 0;
let errors = 0;
let encerts = 0;

//Capturar elements html
//let començarPartida = document.getElementById('començarPartida');
let començarJoc = document.getElementById('començarJoc');

//FUNCIONS

//Esta función enccuentra una palabra aleatoria de la array de la lista de palabras
function trobarParaula(){
    let llistaParaules = ['cabeza', 'coche', 'raton', 'mochila', 'murcielago', 'comida', 'manzana', 'caballo', 'corazlon', 'dragon', 'perro', 'gato', 'acento', 'teclado', 'rey', 'reina', 'picas', 'papelera', 'sudadera', 'tenis', 'raqueta', 'almacen', 'platano', 'jefe', 'melsion', 'cable', 'usb' ];

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
    document.write("Errors: " + errors);
    document.write("<br>");
}

//Amb aquesta funció mostrarem les l letres que l'usuar s'ha equivocat
function mostrarArrayLletresErroneas(){
    document.write("Lletres errades -> ")
    for(let i=0; i<arrayLletresErroneas.length; i++){
        document.write(arrayLletresErroneas[i] + " ");
     }
     document.write("<br>");
}

function mostrarArrayParaulaAAdivinar(){
    for(let i=0; i<arrayParaulaAAdivinar.length; i++){
        document.write(arrayParaulaAAdivinar[i].toUpperCase());
     }
     document.write("<br>");
}


//capturem la lletra de l'usuari.
//demanem que pitji una tecla del teclat i la capturem amb l'event keydown
function capturarLletra(e){

    if(errors == 6){
        document.write("<br>" + "GAME OVER" + "<br>");
        document.write("<a href='javascript:location.reload()'>Tornar a jugar</a><");

    } else if(encerts == arrayParaulaAAdivinar.length-1){
        document.write("YOU WIN");
        document.write("La parula era: ");
        mostrarArrayParaulaAAdivinar();
        document.write("<a href='javascript:location.reload()'>Tornar a jugar</a><");

    } else {
        if((e.keyCode > '64' && e.keyCode <= "90") || e.keyCode == "220"){
            document.write("Has triat la lletra: " + e.key.toUpperCase());
         }
         lletraUsuari = e.key;
         console.log(lletraUsuari);
     
         compararLletra();
         mostrarArrayGuions();
         mostrarArrayLletresErroneas();
         document.write("Escriu una lletra amb el teclat de la A a la Z" + "<br>");
    }    
 }


//comparem que la lletra que entra l'usuari està dins de l'array de la paraula secreta, o no
function compararLletra(){
    let booleanLLetra = false;

    //recorrem l'array de la paraula a endivinar comparant-la amb la lletra que ha possat l'usuari
    for(let i=0; i<=arrayParaulaAAdivinar.length; i++){
        if(lletraUsuari == arrayParaulaAAdivinar[i]){
            arrayGuions[i] = lletraUsuari.toUpperCase();
            booleanLLetra = true; //Amb aquesta variable controlem si està o no la lletra dins de l'array
            encerts += 1;
        } else if (booleanLLetra == false && i == arrayParaulaAAdivinar.length){ //Volem controlar que en el cas de que la lletra que ha possat l'usuari no apareix en la paraula sumi un error
            errors +=1;
            booleanLLetra = false; //Tornam a inicialitzar la variable com a false per la següen lletra
            //Aprofitem també per poder mostrar a l'usuari les lletres que ha escrit malament
            arrayLletresErroneas[indexLletresErroneas] = lletraUsuari.toUpperCase();
            indexLletresErroneas +=1;
        }
    } 
    document.write("<br>");
}


function joc(){
    //primer trobem la paraula
    trobarParaula();

    //separem les lletres i emplenem l'array de guions
    separarLletres();
    
    //Cada vegada que entra mostrarà l'array de guions
    mostrarArrayGuions();

    //Le demana a l'usuari que entri una lletra amb keydown
    document.write("Escriu una lletra amb el teclat de la A a la Z" + "<br>");
    document.addEventListener('keydown', capturarLletra);
 }


//EVENTS
començarJoc.addEventListener('click', joc, false);