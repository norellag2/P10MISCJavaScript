//Paso por valor y paso por referencia en JavaScript

//Los tipos primitivos tienen su paso por valor
let nombre1 = 'Alfredo';
let nombre2 = nombre1;
console.log(nombre2);

nombre2 = 'Pilar';
console.log(nombre1);
console.log(nombre2);

// Los tipos compuestos (arrays y objetos) tienen su paso por referencia
let frutas1 = [ 'pera', 'naranja', 'manzana'];
let frutas2 = frutas1;
console.log(frutas2);
frutas2[1] = 'piña';
console.log(frutas1);