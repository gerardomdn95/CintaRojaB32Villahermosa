import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AddMovie from '../../components/AddMovie/AddMovie';

export default class AddMovieContainer extends Component {
    render() {
        const fecha = new Date().getFullYear();
        return (
            <div>
                <Header
                    titulo='Neflis'
                />
                <div className="container">
                    <h1>Agregar Películas</h1>
                </div>

                <div className="container">
                    <AddMovie />
                </div>

                <Footer
                    fecha={fecha}
                />            
                </div>
        )
    }
}
