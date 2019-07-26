// const pi = 3.1415914159265;

// function imprimeNombre() {
//     return "Gerardo";
// }

/* Arrow functions */

// let imprimeNombre = () => "Gerardo";
// let nombre = imprimeNombre();

// let imprimeNombre = (nombre, edad) => `${nombre} ${edad}`;
// let nombre = imprimeNombre("Gerardo", 24);

// let imprimeNombre = nombre => nombre;
// let nombre = imprimeNombre("Gerardo");

// console.log(nombre);

// Función que genere los 100 primeros números iniciando desde el cero e imprimirlos todos
// Si es múltiplo de 2 Fizz
// Si es múltiplo de 5 Buzz
// Si es múltiplo de 2 y 5 imprimir FizzBuzz

// () =>

// 0
// 1
// Fizz
// 3
// 4
// Buzz
// ...
// 9
// FizzBuzz

// let FizzBuzz = () => {
//     for (let i = 0; i <= 100; i++) {
//         if (i % 2 === 0) {
//             if (i % 5 === 0) {
//                 console.log("Fizzbuzz")
//             } else {
//                 console.log("Fizz");
//             }
//         } else if (i % 5 === 0) {
//             if (i % 2 === 0) {
//                 console.log("Fizzbuzz")
//             } else {
//                 console.log("Buzz");
//             }
//         } else {
//             console.log(i);
//         }
//     }
// }

// FizzBuzz();

// function decimalToBinary(a) {
//     let binary = []
//     while (a > 0) {
//         if (a % 2 == 0) {
//             binary.push("0")
//             a = a / 2
//         } else {
//             binary.push("1")
//             a = a / 2

//             a = Math.trunc(a)
//         }
//     }
//     binary.reverse()
//     return binary.join("")
// }

// let decimalToBinary = (a) => {
//     let binary = [];
//     while (a > 0) {
//         if (a % 2 == 0) {
//             binary.push("0");
//             a = a / 2;
//         } else {
//             binary.push("1");
//             a = a / 2;

//             a = Math.trunc(a)
//         }
//     }
//     binary.reverse()
//     return binary.join("")
// }

// function mayorDeEdad(edad) {
//     if(edad < 18) {
//         return "No es mayor de edad";
//     } else {
//         return "Es mayor de edad";
//     } 
// }

// // condición ? expr1 : expr2 
// let mayorDeEdad = edad => edad < 18 ? "Es menor de edad" : (edad < 100 ? "Sigues vivo" : "¿Estás vivo hermano?");

// let resultado = mayorDeEdad(100);
// console.log(resultado);

// Callbacks

let operacion = (numero, operacion) => operacion(numero);

let cuadrado = (x) => x * x;

let doble = (x) => x + x;

let triple = (x) => x * 3;


// let resultado = operacion(5, cuadrado);
// let resultado2 = operacion(5, doble);
// let resultado3 = operacion(5, triple);
// console.log(resultado);
// console.log(resultado2);
// console.log(resultado3);

let resultado;
console.log(resultado);
console.log(resultado);
console.log(resultado);
console.log(resultado);
console.log(resultado);
console.log(resultado);
console.log(resultado);
console.log(resultado);
console.log(resultado);
console.log(resultado);

setTimeout(() => {
    resultado = 3;
    console.log(resultado);
}, 3000);

console.log("Después de la función");
console.log(resultado);
console.log(resultado);
console.log(resultado);
console.log(resultado);
console.log(resultado);
console.log(resultado);

