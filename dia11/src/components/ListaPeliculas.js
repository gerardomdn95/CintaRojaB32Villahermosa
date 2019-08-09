import React, { Component } from 'react'
import Pelicula from './Pelicula';

export class ListaPeliculas extends Component {
    state = {
        peliculas: [
            {
                movieId: "1",
                title: "Matrix",
                year: "2012",
                description: "jdjdjdj",
                image: "https%3A%2F%2Fwww.chiquipedia.com%2Fimagenes%2Fimagenes-animo09.jpg&imgrefurl=https%3A%2F%2Fwww.chiquipedia.com%2Fimagenes-bonitas%2F&docid=oBYNPiKCxvhIUM&tbnid=shW1AsExROeDwM%3A&vet=10ahUKEwj-wc3ykvLjAhUDbKwKHdyXBPwQMwisASgBMAE..i&w=1024&h=535&bih=741&biw=1440&q=imagenes&ved=0ahUKEwj-wc3ykvLjAhUDbKwKHdyXBPwQMwisASgBMAE&iact=mrc&uact=8",
                theme: "action",
                director: "lalla"
            },
            {
                movieId: "2",
                title: "Miercoles",
                year: "2012",
                description: "jdjdjdj",
                image: "link",
                theme: "action",
                director: "lalla"
            }, 
            {
                movieId: "3",
                title: "Jueves",
                year: "2012",
                description: "jdjdjdj",
                image: "link",
                theme: "action",
                director: "lalla"
            }
        ]
    }
    componentDidMount(){
        console.log("DidMunt");
    }

    componentWillMount() {
        console.log("WillMount");
    }
    componentDidUpdate() {
        console.log("DidUpdate");
    }

    render() {
        console.log("Render");
        return (
            <div>
                <h1>Lista de Pelìculas</h1>
                {this.state.peliculas.map(pelicula => (
                    <Pelicula
                        key ={pelicula.movieId}
                        pelicula = {pelicula}
                    />
                ))}
            </div>
        )
    }
}

export default ListaPeliculas
