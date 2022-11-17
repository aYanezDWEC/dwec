//Elements HTML
let crear = document.getElementById("crear");
let mostrar = document.getElementById('mostrar');
let eliminar = document.getElementById('eliminar');
let misLocalStorage = document.getElementById("misLocalStorage");

//Funcions
//Crea les LocalStorage
function creaLocalStorage() {
    localStorage.setItem("usuario", "LeBron");
    //localStorage.setItem("contraseña", "23");
}

//Mostra les LocalStorage
function mostrarLocalStorage() {
    misLocalStorage.innerHTML = localStorage.getItem("usuario");
   /* for(let index = 0; index < localStorage.length; index++){
        const elemet = localStorage.getItem(localStorage.key(index));
        misLocalStorage.innerHTML += elemet;
    }*/
}

//Elimina LocalStorage
function eliminaLocalStorage() {
    localStorage.removeItem("usuario");
}

//Events
crear.addEventListener('click', creaLocalStorage, false);
mostrar.addEventListener('click', mostrarLocalStorage,false);
eliminar.addEventListener('click', eliminaLocalStorage, false);