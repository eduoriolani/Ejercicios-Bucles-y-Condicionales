/* Ejercicio Nº1 */

// let numero1 = 30
// let numero2 = 45

// if (numero1 > numero2) {
//     console.log(`El primer numero (${numero1}) es mayor que ${numero2}`)
// } else {
//     console.log (`El segundo número (${numero2}) es mayor que ${numero1}`)
// }


// /* Ejercicio Numº 2 */

// if (numero1 === numero2) {
//     console.log(`Ambos numeros son iguales`)
// } else {
//     console.log(`Los numeros son diferentes`)
// }

// /* Ejercicio Numº3 */

// if (numero1 > numero2) {
//     console.log(`${numero1} es mayor que ${numero2}`)
// } else if (numero2 > numero1) {
//     console.log(`${numero2} es mayor que ${numero1}`)
// } else {
//     console.log("Ambos numeros son iguales")
// }

// /* Ejercicio Nº4 */

// let num1 = 35
// let num2 = 32
// let num3 = 22

// if(num1 < num2){
//     if(num1 < num3){
//         console.log(`${num1} es el mas chico`)
//     }
// }   else{
//     if(num2 < num3){
//         console.log(`${num2} es el mas chico`)
//     }   else{
//         console.log(`${num3} es el mas chico`)
//     }
// }

// /* Ejercicio Nº5 */

// let person1 = {
//     nombre: "Nicolas",
//     edad: 26,
//     altura: 1.91,
// }
// let person2 = {
//     nombre: "Juan Cruz",
//     edad: 27,
//     altura: 1.69,
// }

// if (person1.altura > person2.altura) {
//     console.log(`${person1.nombre} es mas alto que ${person2.nombre}`)
// } else {
//     console.log(`${person2.nombre} es mas alto que ${person1.nombre}`)
// }
// if (person1.edad > person2.edad) {
//     console.log(`${person1.nombre} es mayor que ${person2.nombre}`)
// }   else{
//     console.log(`${person2.nombre} es mayor que ${person1.nombre}`)
// }

 /* Ejercicio Nº6 */

//  let nombre = prompt("Ingrese su nombre");
// let edad = prompt("Ingrese su edad");
// let altura = prompt("Ingrese su altura en centímetros");
// let vision = prompt("Ingrese su visión (de 0 a 10)");

// if (edad >= 18 && altura >= 150 && vision >= 8){
//     console.log(`${nombre} estas capacitado para conducir`)
// }   
// else {
//     console.log(`${nombre} no estas capacitado para conducir`)
// }


/* Ejercicio Nº7 */

// let nombre = prompt("Ingrese su nombre");
// let pase = prompt("Ingrese su pase (vip o normal)");
// let tieneEntrada = prompt("¿Posee entrada? (si o no)");

// if (nombre === "Edu" || pase === "vip") {
//   console.log(`Bienvenido ${nombre}`);

//   if (tieneEntrada === "si" || tieneEntrada === "s" || tieneEntrada === "true") {
//     console.log("¡Que disfrute el evento!");
//   } else {
//     let quiereComprar = confirm("¿Desea comprar una entrada?");
    
//     if (quiereComprar) {
//       let dineroDisponible = parseInt(prompt("Ingrese el dinero disponible"));
  
//       if (dineroDisponible >= 1000) {
//         console.log(`¡Venta exitosa! ¡Bienvenido/a, ${nombre}!`);
//       } else {
//         console.log("Lo siento, no tiene suficiente dinero para comprar una entrada.");
//       }
//     } else {
//       console.log("¡Que tenga un buen día!");
//     }
//   }
// } else {

//   let quiereComprar = confirm("Lo siento, no tiene ingreso libre ni un pase vip. ¿Desea comprar una entrada?");
  
//   if (quiereComprar) {
//     let dineroDisponible = parseInt(prompt("Ingrese el dinero disponible"));
    
//     if (dineroDisponible >= 1000) {
//       console.log(`¡Venta exitosa! ¡Bienvenido/a, ${nombre}!`);
//     } else {
//       console.log("Lo siento, no tiene suficiente dinero para comprar una entrada.");
//     }
//   } else {
//     console.log("¡Que tenga un buen día!");
//   }
// }

/* Ejercicio Nº8 */

// const numeroIncognita = 4
// let numeroIngresado = parseInt(prompt("Ingrese un numero del 1 al 10. Tiene 3 intentos"))

//   if (numeroIngresado === numeroIncognita) {
//     alert("Felicidades, acertaste el numero")
//     if (numeroIngresado < numeroIncognita) {
//       parseInt(prompt("El numero ingresado es menor, intente nuevamente (2 intentos)"))
//     } else if (numeroIngresado > numeroIncognita){

//     }
    
//   }


/* Ejercicio Nº9 */

// const edadIngresada = parseInt(prompt("Ingrese su edad."))

//   if (edadIngresada <= 12 && edadIngresada >= 0) {
//     console.log("Es usted un infante")
//   } else if (edadIngresada > 12 && edadIngresada <= 18 ){
//     console.log ("Es usted un adolescente.")
//   } else if (edadIngresada > 18 && edadIngresada <= 45){
//     console.log ("Es usted un adulto joven")
//   } else if (edadIngresada > 45 && edadIngresada < 100){
//     console.log("Es usted un anciano")
//   } else {
//     console.log("De verdad tiene esa edad?")
//   }


/* Ejercicio Nº10 */

// const jugador1 = prompt("Juguemos piedra papel o tijeras, ingrese tu eleccion.")

//   if ( jugador1 !== "piedra" && jugador1 !== "papel" && jugador1 !== "tijeras"){
//     alert("Hiciste trampa")
//   }

// const jugador2 = prompt("Juguemos piedra papel o tijeras, ingrese tu eleccion.")

//   if ( jugador2 !== "piedra" && jugador2 !== "papel" && jugador2 !== "tijeras"){
//   alert("Hiciste trampa")
// }

//   if (jugador1 === jugador2){
//     alert("Hubo un empate")
//   } if ((jugador1 === "piedra" && jugador2 === "tijeras") && (jugador1 === "tijeras" && jugador2 === "papel") &&(jugador1 === "papel" && jugador2 === "piedra")){
//     alert ("Jugador 1 ha ganado")
//   } else{
//     alert ("Jugador 2 ha ganado.")
//   }


/* Ejercicio Nº11 */


