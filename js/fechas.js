// Manejo de fechas JS 
// Date
//Obtener la fecha actual

let fechaActual = new Date ();
console.log(fechaActual);

// El constructor de Date también permite pasarle fechas diferentes a la actual

// 1º opcion es mediante argumentos 
// año, mes (indexado a 0), dia, hora, minutos, segundos y milisegundos en ese orden y opcionales a partir de año

let  fechaNacimiento = new Date (1973, 10, 18);
console.log(fechaNacimiento);

// 2º Opción es mediante un 'string-date'
// string con este formato 'yyyy-mm-dd' (el mes indexado a 1)

let fechaExpedicion = new Date ('2022-05-17');
console.log(fechaExpedicion);

//3º Opcion es mediante milisegundos desde Epoch (1 enero 1970)

let fechaAlAzar =new Date (4598763125);
console.log(fechaAlAzar);

//Metodos y propiedades de los objetos de la clase Date

console.log(fechaActual.getFullYear()); //devuelve el año
console.log (fechaActual.getMonth()); //devuelve el mes
console.log (fechaActual.getDay()); //devuelve el día de la semana
console.log (fechaActual.getHours()); //devuelve las horas
console.log (fechaActual.getMinutes()); //devuelve los minutos
console.log (fechaActual.getSeconds()); //devuelve los segundos
console.log (fechaActual.getMilliseconds()); //devuelve los milisegundos

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
let mesActual = meses [fechaActual.getMonth()];
console.log(mesActual);

//Calculo de fecha (emplea milisegundos)
//getTime() retorna siempre los milisegundos desde Epoch
console.log(fechaActual.getTime());

let fechaEntrega = new Date (new Date().getTime() + 3 * 24 * 60 * 60 * 1000);
console.log(fechaEntrega);