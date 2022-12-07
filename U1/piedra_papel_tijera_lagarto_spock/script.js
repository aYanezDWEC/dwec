const arrayEleccion = ["piedra", "papel", "tijera", "lagarto", "spock"];
let eleccioMaquina = "";


//Capturar elements HTML _____________
let començarJoc = document.getElementById('començar_joc');
let eleccioJugador = document.getElementById('eleccio_jugador');
let nomJugador = document.getElementById('nom_jugador');
let fomulariElecció = document.getElementById('fomulari_elecció');
let botonEleccio = document.getElementById('boton_eleccio');


//FUNCIONS______________________
//Demana a l'usuari el seu nom y et dona la venbinguda al joc.
function demanarNomJugador(){
    var nombreJugador = prompt("¿Cuál es tu nombre?");
    nomJugador.innerHTML = "Bienvenido/a " + nombreJugador;
    començarJoc.disabled = true;
    eleccioJugador.hidden = false;
    botonEleccio.hidden = false;
}

function demanarEleccioJugador(){
    
}

//Amb aquesta funció aconseguim trobar un nombre aleatori, aquest nombre aleatori serà el index de la taula de eleccions
function buscaEleccion(){
     let nombre = Math.floor(Math.random()*arrayEleccion.length);
     eleccioMaquina = arrayEleccion[nombre];

     console.log(eleccioMaquina);
}

//EVENTS______________________________________
començarJoc.addEventListener('click', juego, false);





//Anem a jugar
function juego(){
    //Primer demanem el nom del jugador
    demanarNomJugador();
    
    //Després demanem que escrigui un resposta
    demanarEleccioJugador();
}
