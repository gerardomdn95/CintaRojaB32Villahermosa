// ES6 Funcional
//                  0        1       2
const arreglo = ["Mazda", "Audi", "Honda"];
const numeros = [2, 10, 8];

// Recorrer el arreglo
// Funcional
// arreglo.forEach(elemento => {
//     console.log(elemento);
// });

// // Imperativa
// for(let i = 0; arreglo.length > i; i++){
//     console.log(arreglo[i]);
// }

// Map
let mitad = arreglo.map(elemento => "Auto " + elemento);
console.log(numeros);
console.log(mitad);

// Filter
let filtrados = arreglo.filter(data => data.length < 5);
console.log(filtrados);

// Reduce
let reduccion = numeros.reduce((sum, element) => sum + element, 0);
console.log(reduccion);

// Conceptos importantes !!!

// Funciones puras
// f(x) => y
let fact = (x) => Math.factorial(x);

// Estados compartidos
// let materia = new Materia()
// let alumno = new Alumno()
// alumno.materia = materia

// Inmutabilidad
const pi = 3.1416;
let suma = 5 + 3;

// Efectos secundarios
let meses = 12;

let mayorEdad = (edad) => {
    edad = edad + meses;
    return edad > 17 ? "Es mayor de edad" : "Es menor de edad";
}

// Composición de funciones

// f(x)
// g(x)
// f(g(x))


// getMoves = (nombre) => {
//  request
//  filter
//  return movimientos > 5 caracteres    
//}