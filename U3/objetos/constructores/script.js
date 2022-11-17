function coche (marca, modelo, color, kms, combustible){
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.kms = kms;
    this.combustible = combustible;
}



let miCoche = new coche("Ferrari", "LaFerrari", "Rojo", 12, "Gasolina");
let tuCoche = new coche("Ford", "Fiesta", "Azul", 12000, "Diesel");

let otroCoche = miCoche;

otroCoche.color

console.log(miCoche);
console.log(tuCoche);
console.log(otroCoche);