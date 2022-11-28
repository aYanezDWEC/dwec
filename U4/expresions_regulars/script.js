let patro = /dwec/i;

let cadena = "cada 20 100 o cada 1000 23333 vegades";

let possició = cadena.search(patro);

//cadena = "jmesion123@iesjoanramis.org";

// patro = /\d/g; 
// patro = /\w/g; 
// patro = /\W/g; 
patro = /\d{2,3}/g; 

let resultat = cadena.match(patro);

console.log(resultat);