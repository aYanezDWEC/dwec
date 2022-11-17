
/*
function ssuma (a, b){
    return a + b;
}


let resta = new Function("a", "b", "return a + b");

let c = suma(4, 6);

console.log(c);
*/

/*
function factorial(numero){
    if (numero == 0){
        return 1;
    } else {
        return (numero * factorial(numero - 1));
    }
}


console.log(factorial(5)); */


function fibonacci(numeroLimite){
   	
	let limite = numeroLimite;
	let fibonacciA = 0;
    let fibonacciB = 1;

    console.log(fibonacciA);
    console.log(fibonacciB);

	for(let i=0; i<=limite; i++){

        let fibonacciC = (fibonacciA + fibonacciB);
		console.log(fibonacciC);
	}
}

//fibonacci(10);


let objetoVacio = {};
console.log(objetoVacio);


let unCliente = {
    nombre : "Giannis Antetokounmpo",
    'direccion del cliente': 'C/ Desconeguda nPi',
    pagos: {
        tipo: 'visa',
        'numero de la tarjeta': 72564672927,
        'fecha de caducidad': 'never'
    }
}

console.log(unCliente);



//FUNCIONES AUXILIARES
function muestraCamposYValores(miObjeto){
    for(campo in miObjeto){
        if(typeof(miObjeto[campo]) == 'object'){
            muestraCamposYValores(miObjeto[campo]);
        } else{
            console.log(campo + ": " + miObjeto[campo]);
        }
    }
}

muestraCamposYValores(unCliente);



let estudiante ={
    id: 8,
    nombre: "Joan",
    //Funcion dentro de un parametro del objeto
    diHola: () => 'Hola'

};


//Le añadimos otro campo al objeto
estudiante.edad = 88;

console.log(estudiante.edad);


//Ahora otra funcion
estudiante.diAdios = () => 'Adeu';

muestraCamposYValores(estudiante);
console.log(estudiante.diAdios());


let factura ={
    descripcion: 'Factura de ejemplo',
    precio: 100.00,
    IVA: 21.00,
    subtotal: () => this.precio,
    total: function(){
        return this.precio + (this.precio * this.IVA) / 100;
    }
}

console.log(factura);
console.log(factura.total());