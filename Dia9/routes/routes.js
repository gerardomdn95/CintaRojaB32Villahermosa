const express = require("express");
const router = express.Router();

const { Movie } = require("../models/movie");

router.get("/", (req, res) => {
    res.status(200).send({response: "Corriendo desde routes"});
});

router.post("/api/v1/pelicula", (req, res) => {
    const { title, year, description, image, theme, director } = req.body;
    const newMovie = Movie({
        title, 
        year, 
        description, 
        image, 
        theme, 
        director
    });
    newMovie.save((err, pelicula) => {
        err ? res.status(409).send(err.message) : res.status(201).send(pelicula)
    });
});

router.get("/api/v1/pelicula", (req, res) => {
    Movie.find().exec()
        .then(movies => res.status(200).send(movies))
        .catch(err => res.status(404).send(err));
});

router.get("/api/v1/peliculaById/", (req, res) => {
    const { id } = req.query;
    Movie.findById(id).exec()
        .then(movies => res.status(200).send(movies))
        .catch(err => res.status(404).send(err));
});

module.exports = { router };