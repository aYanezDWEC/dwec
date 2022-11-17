//Elements HTML
let crear = document.getElementById("crear");
let mostrar = document.getElementById('mostrar');
let eliminar = document.getElementById('eliminar');
let misCookies = document.getElementById("misCookies");

//Funcions
//Crea les cookies
function creaCookies() {
    let usuarioCookie = "Dani";
    document.cookie = "usuario=" + encodeURIComponent(usuarioCookie);
    document.cookie = "color=rojo;expires=30 Oct 2022 12:00:00 GMT";
}

//Mostra les cookies
function mostrarCookies() {
    misCookies.innerHTML = document.cookie;
}

//Elimina cookies
function eliminaCookies() {
    document.cookie = "usuario=; max-age=0";
}

//Events
crear.addEventListener('click', creaCookies, false);
mostrar.addEventListener('click', mostrarCookies,false);
eliminar.addEventListener('click', eliminaCookies, false);