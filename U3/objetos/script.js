 let a = new String();
let b = new Number();
let c = new Boolean();

let cadena = new String("Hola");
let cadena2 = "Hola";

console.log(cadena == cadena2);
console.log(typeof cadena);
console.log(typeof cadena2);
 


let coche = {
    marca: "Ferrari",
    model: "LaFerrari",
    color: "Rojo",
    puertas: 2,
    kms: 0,
    automatico: false,
    propietario: {
        nombre: "Joan",
        apellido: "Melsion"
    }
};

let coche2 = new Object();
coche2.marca = "Kia";
coche2.model = "Niro";
coche2.color = "Azul mahon";
coche2.puertas = 5;
coche2.kms = 600;
coche2.automatico = true;


for(campo in coche){
    console.log(campo + ": " + coche[campo]);
}

console.log(coche.propietario.nombre);
console.log(coche["propietario"]["apellido"])
