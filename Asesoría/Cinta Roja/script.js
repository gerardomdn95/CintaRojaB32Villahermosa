const request = require("request");
const rp = require("request-promise");

//              0       1        2          3
let autos = ["Mazda", "Audi", "Honda", "Chevrolet"];
let auto = {
    color: "rojo",
    marca: "Mazda",
    modelo: 2019
}

// Imperativa
//                  4       > 0
for(let i = 0; autos.length > i; i++) {
    console.log(autos[i]);
}

// Funcional
autos.forEach(auto => {
    console.log(auto);
});

const getPokemon = (nombre) => {
    let options = {
        method: 'GET',
        uri: `https://pokeapi.co/api/v2/pokemon/${nombre}/`,
        body: {
            some: 'payload'
        },
        json: true // Automatically stringifies the body to JSON
    };
    const json = rp(options);
    return json;
}

getPokemon("pikachu").then(data => {
    console.log(data.moves);

});