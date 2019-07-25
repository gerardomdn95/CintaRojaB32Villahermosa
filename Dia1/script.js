// var nombre = "Gerardo";
// var edad = 24;
// var casado = false;

// console.log("Hola mi nombre es " + nombre + " y mi edad es " + edad);
// console.log("y para cumplir 25 me faltan " + (25 - edad) + " año.");

// JSON
// Javascript Object Notation

// Objeto literal
var sensei = {
    nombre: "Gerardo",
    edad: 24,
    cinta: "Cinta roja",
    sede: "Villahermosa",
    pais: "México",
    activo: true,
    stack: "MERN",
    sedes: ["CDMX", "Mérida", "Villahermosa"],
    equipo: {
        marca: "Apple",
        anio: 2017,
        color: "Gris"
    },
    saludo: function(nombre) { return "¡Saludos " + nombre +  "!"; },
    despedida: function() { return "¡Hasta luego!" }
};

// Long Term Support

console.log(sensei);
console.log(sensei.nombre);

var saludo = sensei.saludo("Gerardo");
console.log(saludo);
console.log(sensei.despedida());

console.log(sensei.equipo.marca);