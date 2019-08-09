import React, { Component } from 'react';
import Pelicula from './Pelicula';
import axios from "axios";

export class ListaPeliculas extends Component {
    state = {
        peliculas: []
    }
    //Métodos de ciclo de vida

    componentDidMount() {

    }

    componentWillMount() {
        axios.get("https://cintaroja32.herokuapp.com/api/v1/pelicula")
        .then(peliculas => {
            console.log("Request correcto");
            console.log(peliculas.data);
            this.setState({peliculas: peliculas.data})
        })
        .catch(err => console.log(err));
    }

    componentDidUpdate() {

    }

    render() {
        const { peliculas } = this.state;
        return (
            <div className="container">
                <h1>Lista de Peliculas</h1>
                <div className="row">
                    {peliculas.map(pelicula => (
                        <Pelicula
                            key={pelicula.movieId}
                            pelicula={pelicula}
                        />
                    ))}
                </div>

            </div>
        )
    }
}

export default ListaPeliculas;
