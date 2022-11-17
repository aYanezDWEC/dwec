const contenidor = document.querySelector('.contenidor');
const seients = document.querySelectorAll('.fila .seient:not(.ocupat'); //Nos devuelve todo de lo que le pasemos
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');
let preuDelTicket = +peliculaSelect.value;
//console.log(preuDelTicket);
//console.log(typeof preuDelTicket);

/* EVENTOS */
contenidor.addEventListener('clicl', (e) => {
   if(e.target.classList.contains('seient') && !e.target.classList.contains('ocupat')){
        e.target.classList.tooggle(seleccionat);
   }
});