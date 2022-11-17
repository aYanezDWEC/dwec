//Las funciones setTimeOut()

//setInterval()






let elCrono;




crono();

function crono(){

    

    let laMevaData = new Date();
    let horas = laMevaData.getHours();
    let minutos = laMevaData.getMinutes();
    let segundos = laMevaData.getSeconds();

    let letras = '';

    if(horas > 12){
        horas = horas - 12;
        letras = 'am';
    } else {
        letras = 'pm';
    }

    if(horas < 10) {horas = '0' + horas;}
    if(minutos < 10) {minutos = '0' + minutos;}
    if(segundos < 10) {segundos = '0' + segundos;}


    let text = document.getElementById('hora');

    //getHours() -> método que extrae las horas del objeto Date
    //getMinutes() -> método que extrae los minutos del objeto Date
    //getSeconds() -> método que extrae los segundos del objeto Date
    

   text.innerHTML = horas + ':' + minutos + ':' + segundos + ' ' + letras;

    //text.innerHTML = laMevaData;


   



}

window.onload = function(){
    elCrono = setInterval(crono, 1000);
}