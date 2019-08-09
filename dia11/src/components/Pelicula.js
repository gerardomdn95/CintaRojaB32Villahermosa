import React from 'react' 
import './Pelicula.css';

const Pelicula = ({pelicula}) => {
    return (
        <div>
            <h3 className="rojo">Titulo: {pelicula.title}</h3>
            <p className="centro">Año: {pelicula.year}</p>
            <p>Descripciòn: {pelicula.description}</p>
            <p>Gènero: {pelicula.theme}</p>
            <p>Director: {pelicula.director}</p>
            <img src={pelicula.image} alt="imagen"></img>
        </div>
    )
}

export default Pelicula

