import React from 'react'
import Swal from 'sweetalert2'
import axios from 'axios'

const removeMovie = (pelicula) => {

    Swal.fire({
        title: `Estás seguro de eliminar "${pelicula.title}"`,
        text: "No será posible recuperar este registro",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: "No",
        confirmButtonText: 'Sí',
    }).then((result) => {
        if (result.value) {
            axios.delete(`https://cinta-roja32.herokuapp.com/api/v1/peliculas/delete?id=${pelicula._id}`)
                .then((status) => {
                    console.log(status);
                    Swal.fire({
                        type: 'success',
                        title: 'Película eliminada',
                    }).then(() => window.location.reload())
                })
                .catch(err => {
                    Swal.fire("Error");
                })
        }
    })

}

const Pelicula = ({ pelicula }) => (
    <div className="col-sm-4">
        <div className="card">
            <img src={pelicula.image} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{pelicula.title}</h5>
                <p className="card-text">Año: {pelicula.year}</p>
                <p className="card-text">Descipción: {pelicula.description}</p>
                <p className="card-text">Género: {pelicula.theme}</p>
                <p className="card-text">Director: {pelicula.director}</p>
                <button className="btn btn-danger" onClick={() => removeMovie(pelicula)}>Eliminar</button>
            </div>
        </div>
    </div>
);

export default Pelicula
