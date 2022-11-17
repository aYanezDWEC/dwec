//Mostrar un objeto y si tiene mas 'objetos dentro de el'
function muestraCamposYValores(miObjeto){
    for(campo in miObjeto){
        if(typeof(miObjeto['campo']) == 'object'){
            muestraCamposYValores(miObjeto[campo]);
        } else{
            console.log(campo + ": " + miObjeto[campo]);
        }
    }
}