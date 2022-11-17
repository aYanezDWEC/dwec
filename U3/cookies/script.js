//CREAR UN COOKIE

document.cookie = "usuario=Joan";

let mostar = document.getElementById('mostrar');
mostar.innerHTML=document.cookie;

//Elemento HTML
let crear= document.getElementById('crear');
let eliminar = document.getElementById('eliminar');

//Funció per crear una cookie
function crearCookie(){
    //let usuarioCookie = "Alex";
    //encodeURIComponent(usuarioCookie);
    document.cookie = "usuario=Drac";
    document.cookie = "color=Rojo;expires=Sat, 29 Oct 2022 12:00:00 GMT";
    alert("HOLA");
}

function eliminarCookie(){
    document.cookie = "usuario=; max-age=0"; 
}

//Mostrar la cookie 

//Evento
crear.addEventListener('click', crearCookie, false);