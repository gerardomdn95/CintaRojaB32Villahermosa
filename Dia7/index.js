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
    // Get POKEAPI
    // Instancia de la clase Pokemon
    // Devolver objeto pokemon limpio

    // this.name = nombre;
    // this.imagen = imagen;
    // this.id = id;
    // this.movimientos = {
    //     movimiento1: move1,
    //     movimiento2: move2,
    //     movimiento3: move3,
    //     movimiento4: move4
    // }

    console.log(req.params);
    const { nombre, tipo } = req.params;
    res.status(200).send(`El pokémon que intentas buscar es ${nombre}.`);
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
