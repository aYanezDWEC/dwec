//Las funciones setTimeOut()

//setInterval()

//Declaración de variables
let elCrono;
let laMevaData = new Date();


//Capturem els elements HTML amb els que traballarem
let display = document.getElementById('display');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');
let lap = document.getElementById('lap');
let displayVueltas = document.getElementById('vueltas');
let vueltas = [];
let contadorVueltas = 0;


//Iniciar el cronometro a cero
resetear();


function crono(){

    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();

    segundos = segundos + 1;

    if(segundos == 60){
        segundos = 0;
        minutos += 1;
        laMevaData.setMinutes(minutos);
    }

    //Formato para ponerlo bonito
    if(horas < 10) {horas = '0' + horas;}
    if(minutos < 10) {minutos = '0' + minutos;}
    if(segundos < 10) {segundos = '0' + segundos;}


    laMevaData.setSeconds(segundos);

   

    //getHours() -> método que extrae las horas del objeto Date
    //getMinutes() -> método que extrae los minutos del objeto Date
    //getSeconds() -> método que extrae los segundos del objeto Date
    

   display.innerHTML = horas + ':' + minutos + ':' + segundos;

  

   



}

function recarrega(){
    elCrono = setInterval(crono, 1000);
    start.disabled = true;
    stop.disabled = false;
    lap.disabled = false;
}


function parar(){
    clearInterval(elCrono);
    stop.disabled = true;
    start.disabled = false;
    start.innerHTML = 'Continuar';
    reset.disabled = false;
}

function resetear(){
    laMevaData.setHours(0, 0, 0, 0);
    display.innerHTML = "00:00:00";
    start.disabled = false;
    start.innerHTML = 'Start';
    reset.disabled = true;
    stop.disabled = true;

}

let c = 7;

function vuelta(){
    //displayVueltas.innerHTML="HOLA";

    for(let i = 0; i<c; i++){
        displayVueltas.innerHTML("Vuelta ");
        c++;
    }

}

//Events

start.addEventListener('click', recarrega, false);

stop.addEventListener('click', parar, false);

reset.addEventListener('click', resetear, false);

lap.addEventListener('click', vuelta, false);


