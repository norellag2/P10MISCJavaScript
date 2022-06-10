// Varios para tipos number

// Clase propia de JS Math

//Para redondear
let puntuacion = 2.5;

let puntuacionRedondeada = Math.round (puntuacion);
console.log (puntuacionRedondeada);

//Redondeo a la baja 

puntuacion = 9.7;

puntuacionRedondeada = Math.floor(puntuacion);
console.log(puntuacionRedondeada);



//Redondeo al alza

puntuacion = 9.3;

puntuacionRedondeada = Math.ceil(puntuacion);
console.log(puntuacionRedondeada);


// Random devuelve un número al azar entre 0 y 0.9999999999

let nombres = ['Carlos', 'Juan', 'Maria', 'Pilar'];
let nombreElegido = nombres[Math.floor(Math.random() * nombres.length)];
console.log(nombreElegido);

// Parseo de string a number

let resultado = '9.7';

let resultadoParseado = parseFloat(resultado);
console.log(typeof resultadoParseado);

resultadoParseado = parseInt(resultado); //convierte a number entero, elimina la parte flotante (decimales)
console.log(resultadoParseado);

resultadoParseado = Number(resultado); //idem parseFloat
console.log(resultadoParseado);

resultadoParseado = resultado * 1; //Version tricky o molona de hackaton
console.log(resultadoParseado);

// Parsear de number a string
let resultado2 = 54.7;
let resultado2parseado = resultado2.toString();
console.log (typeof resultado2parseado);

resultado2parseado = resultado2 + '';
console.log(typeof resultado2parseado); //version tricky o molona de hackaton