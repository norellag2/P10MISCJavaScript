// Métodos para arrays de objetos
// ECMAScript 6
let alumnos = [
    {nombre: 'María', apellidos: 'Zull', puntuacion: 4.6},
    {nombre: 'Juan', apellidos: 'Pérez', puntuacion: 7},
    {nombre: 'Pilar', apellidos: 'Gómez', puntuacion: 9.6},
]

// Ciclo forEach son métodos que actuan sobre arrays
//ejecutar una función por cada elemento del array

alumnos.forEach((elem, i) => {
    if(elem.puntuacion >= 5) {
       elem.apto = true;
    } else {
        elem.apto = false;
    }
})
console.log(alumnos);

// Ciclo Map  son metodos que actuan sobre array
//Ejecutar una funcion que retorna un elemento a un nuevo array

 let listaAlumnos = alumnos.map((elem, i) => {
    return `${i + 1}.- ${elem.nombre} ${elem.apellidos}`;
})
console.log(listaAlumnos);

//Ciclo filter ECMAScript 6
//Ejecuta una función que retorna un elemento a un nuevo array cuando cumple una condicion
let alumnosAptos = alumnos.filter(elem => elem.apto);
console.log (alumnosAptos);
