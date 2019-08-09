import React from 'react'

const Pelicula = ({pelicula}) => (
    <div className="col-sm">
    <div className="card">
        <img src={pelicula.image} className="card-img-top" alt="..."></img>
        <div className="card-body">
            <h5 className="card-title">{pelicula.title}</h5>
            <p className="card-text">Año: {pelicula.year}</p>
            <p className="card-text">Descipción: {pelicula.description}</p>
            <p className="card-text">Género: {pelicula.theme}</p>
            <p className="card-text">Director: {pelicula.director}</p>
            <a href="index.html" className="btn btn-primary">Ver Película</a>
        </div>  
    </div>
    </div>
);

export default Pelicula
