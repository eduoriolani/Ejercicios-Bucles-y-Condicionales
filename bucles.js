/* Ejercicio Nº1 */

// let numero = 5

// for ( let i = 1; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero * i}`)
// }
// console.log("");

/* Ejercicio Nº2 */


// let numeroIngresado = parseInt(prompt("Ingrese un número (0 para terminar):"));
// console.log(`El numero ingresado es ${numeroIngresado}`);

// while (numeroIngresado !== 0) {
//   numeroIngresado = parseInt(prompt("Ingrese otro número (0 para terminar):"));
//   console.log(`El numero ingresado es ${numeroIngresado}`);
// }


/* Ejercicio Nº3 */

// let numeroIncognita = 29
// let intentos = 0;
// let numeroIngresado = parseInt(prompt("Ingrese un número entre 1 y 100:"));

// while (numeroIngresado !== numeroIncognita) {
//   intentos++;
  
//   if (numeroIngresado > numeroIncognita) {
//     alert("El número ingresado es mayor que el número secreto.");
//   } else {
//     alert("El número ingresado es menor que el número secreto.");
//   }
  
//   numeroIngresado = parseInt(prompt("Ingrese otro número:"));
// }

// intentos++;

// alert("¡Felicitaciones, ha adivinado el número secreto en " + intentos + " intentos!");


/* Ejercicio Nº4 */

// let numero = Number(prompt("Ingrese un numero"))

// function encontrarDivisores(numero){
//     let divisores = []
    
//     for (let i = 1; i <= numero; i++) {
//         if (numero % i === 0) {
//             divisores.push(i)
            
//         }
//     }
//     return divisores;        
// }
//     let divisores = encontrarDivisores(numero)
//     if (divisores.length <= 2){
//     console.log(`El numero ${numero} es primo`)
//     } else{
//         console.log(`El numero ${numero} no es primo`)
//     }



    /* Ejercicio Nº5 */


// function encontrarDivisores(numero) {
//     let divisores = [];
    
//     for ( let i = 1 ; i <= numero ; i++){
//     if (numero % i === 0) {
//         divisores.push(i)
//     }
// }
//     return divisores;
// }
// let numero = Number(prompt("Ingrese un número"))
// let divisores = encontrarDivisores(numero)
// console.log(`El numero ${numero} es divisible por ${divisores}`);



/* Ejercicio Nº6 */

// let array = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0 ; i < array.length ; i++){
//     console.log(`Este es el array Nº ${i}`)
// }


/* Ejercicio Nº7 */

// let numero = [2,4,6,8,10,12,14,16,18,20]

// for (let i = 0 ; i < numero.length ; i++){
//     console.log(`${numero [i] * 2}`)
// }


/* Ejercicio Nº8 */

// const personas = [
//   {
//     nombre: "Edu",
//     apellido: "Oriolani",
//     edad: 26,
//     altura: 1.90,
//   },
//   {
//     nombre: "Guido",
//     apellido: "Pigliapoco",
//     edad: 26,
//     altura: 1.85,
//   },
//   {
//     nombre: "Nicolas",
//     apellido: "De Francesco",
//     edad: 26,
//     altura: 1.91,
//   },
//   {
//     nombre: "Juan Cruz",
//     apellido: "Retamar",
//     edad: 27,
//     altura: 1.68,
//   }
// ]
// for (let i = 0; i < personas.length; i++) {
//     console.log(`Hola ${personas[i].nombre}, como estás?`)
  
// }

/* Ejercicio Nº9 */

// const numero = [1,2,3,4,5,6,7,8,9,10]

// for ( let i = 0 ; i < numero.length ; i++){
//     if(numero[i] % 2 !== 0){
//       console.log(`Es impar ${numero[i]}`)
//     }
// }

/* Ejercicio Numº10 */

// let numero;
// let sumaPares = 0;
// let sumaImpares = 0;

// do {
//     numero = parseInt(prompt("Ingrese un número (0 para salir):"));

//     if (!isNaN(numero)) {
//         if (numero !== 0) {
//             if (numero % 2 === 0) {
//                 sumaPares += numero;
//             } else {
//                 sumaImpares += numero;
//             }
//         }
//     } else {
//         console.log("Debe ingresar un número válido.");
//     }
// } while (numero !== 0);

// console.log(`La suma de los números pares es ${sumaPares}`);
// console.log(`La suma de los números impares es ${sumaImpares}`);
 


/* Ejercicio Nº11 */

// const numero = [1,3,12,45,2,4,7,9,11,10]

// let numeroMayor = [0]

// for ( let i = 0 ; i < numero.length ; i++){
//   if (numero[i] > numeroMayor){
//     numeroMayor = numero[i];
//   }
// }
// console.log(`El numero mayor es ${numeroMayor}`)

/* Ejercicio Nº12 */

// const numero = [1,3,12,45,2,18,24,9,11,75]

// let numeroMenor = [0]

// for ( let i = 0 ; i < numero.length ; i++){
//   if (numero[i] < numeroMenor){
//     numeroMenor = numero[i];
//   }
// }
// console.log(`El numero menor es ${numeroMenor}`)
  
/* Ejercicio Nº13 */

// let jugador1 = prompt("Escriba el nombre del jugador 1:");
// let jugador2 = prompt("Escriba el nombre del jugador 2:");
// let jugada1 = []
// let jugada2 = []
// function jueguito() {
//   do {
//     let jugada1 = prompt("Jugador 1: ¿Piedra, papel o tijera?");
//     let jugada2 = prompt("Jugador 2: ¿Piedra, papel o tijera?");

//     if (jugada1 === jugada2) {
//       alert("Empate, sigan jugando.");
//     }
//   } while (jugada1 === jugada2);{

//   if ((jugada1 === "piedra" && jugada2 === "tijera") ||  
//       (jugada1 === "papel" && jugada2 === "piedra")  ||
//       (jugada1 === "tijera" && jugada2 === "papel")) {
//     console.log(`¡${jugador1} gana!`);
//   } else {
//     console.log(`¡${jugador2} gana!`);
//   }
// }
// }

// jueguito();

// const jugador1 = prompt("Ingrese el nombre del Jugador 1:");
// const jugador2 = prompt("Ingrese el nombre del Jugador 2:");


// let ganador;
// while(!ganador) {

//   const mano1 = prompt(`${jugador1}, ¿Qué eliges? (piedra, papel, tijeras)`);
//   const mano2 = prompt(`${jugador2}, ¿Qué eliges? (piedra, papel, tijeras)`);

//   if(mano1 === mano2) {
//     console.log("¡Empate! Vuelvan a jugar.");
//   } else if(
//     (mano1 === "piedra" && mano2 === "tijeras") ||
//     (mano1 === "papel" && mano2 === "piedra") ||
//     (mano1 === "tijeras" && mano2 === "papel")
//   ) {
//     ganador = jugador1;
//   } else {
//     ganador = jugador2;
//   }
// }

// console.log(`¡${ganador} ha ganado!`);


/* Ejercicio Nº14 y Nº15 */

// for (let i = 1 ; i <= 5 ; i++){
//     let fila = ""
//     for (let j = 0 ; j < i ; j++){
//         fila += "*"
//     }
//     console.log(fila)
// }
// console.log("")


// for (let i = 5 ; i >= 1 ; i--){
//     let fila = ""
//     for (let j = 0 ; j < i ; j++){
//         fila += "*"
//     }
//     console.log(fila)
// }

/* Ejercicio Nº16 */

let numerosDesordenados = [11,3,2,15,4,6,18,19,7,10]
let numerosIngresados = []

    for( i = 0 ; i < 5 ; i++){
        numerosIngresados.push(parseInt(prompt("Ingrese 5 numeros aleatorios, que serán ordenados")))
    }
    alert(`Los numeros ingresados fueron ${numerosIngresados}`);


console.log(`Numeros ingresados desordenados: ${numerosIngresados}`);
console.log("");

 function numerosPorOrdenar(ordenNumeros){
    const numero = ordenNumeros.length;
    for ( let i = 0 ; i < numero ; i++){
        for ( let j = 0 ; j < numero - i ; j++){
            if ( ordenNumeros[j] > ordenNumeros[j+1]){
                let cambiarOrden = ordenNumeros[j];
                ordenNumeros[j] = ordenNumeros[j+1];
                ordenNumeros[j+1] = cambiarOrden;                
            }
        }
    }
    return ordenNumeros
}

// console.log(`Numeros ingresados ordenados: ${numerosPorOrdenar(numerosIngresados)}`);


/* Segunda solucion encontrada (No la hice yo) */

// let numerosDesordenados = [10,7,3,6,9,15,23,12,2,1]
// let numerosPorOrdenar = [];

//     for( let i = 0 ; i < 10 ; i++){
//         const minimo = Math.min(...numerosDesordenados)
//         console.log(minimo)
//         numerosPorOrdenar.push(minimo)
//         numerosDesordenados.splice(numerosDesordenados.indexOf(minimo), 1)
//     }
//     console.log(numerosPorOrdenar)
