// Dependencias necesarias
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const rp = require("request-promise");

// Importar Pokemon
const { Pokemon } = require("./pokemon");

// Declaramos instancia y puerto en el que correrá nuestro server
const app = express();
const port = 3000;

// Interpretar el request que viene desde el cliente
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Rutas
app.get("/", (req, res) => {
    res.status(200).sendfile("index.html");
});

// Funciones
const getPokemon = (name) => {
    let options = {
        method: 'GET',
        uri: `https://pokeapi.co/api/v2/pokemon/${name}/`,
        body: {
            some: 'payload'
        },
        json: true
    };
    const json = rp(options);
    return json;
}

app.get("/nombre", (req, res) => {
    const respuesta = {
        nombre: "Gerardo",
        cinta: "Cinta Roja",
    }
    res.status(200).send(respuesta);
});

app.get("/sensei", (req, res) => {
    const respuesta = {
        escuela: "dev.f",
        stack: "MERN",
    }
    res.status(200).send(respuesta);
});

// Params
app.get("/pokemon/:nombre/", (req, res) => {
    const { nombre } = req.params;
    getPokemon(nombre).then((data) => {
        const respuesta = new Pokemon(data.name, 
                                      data.sprites.front_default, 
                                      data.id, 
                                      data.moves[0].move.name,
                                      data.moves[1].move.name, 
                                      data.moves[2].move.name,
                                      data.moves[3].move.name);
        res.status(200).send(respuesta);
    }).catch(error => {
        console.log(error.statusMessage);
        res.status(error.statusCode).send(error.statusCode);
    });
});

getPokemon("pikachu").then(data => {

}).catch(error => {

});

// Query Parameters
app.get('/suma', (req, res) => {
    const { num1, num2 } = req.query;
    const resultado = (+num1) + (+num2);
    res.status(200).send({ resultado });
});

// Multiplicación de dos número utilizando PARAMS
// División de dos número utilizando QUERY

// Clase Pokemon

// Esta línea va hasta el final
app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});
