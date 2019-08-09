import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ListaPeliculas } from '../../components/ListaPeliculas';

export default class MainContainer extends Component {
    render() {
        const fecha = new Date().getFullYear();
        return (
            <div>
                <Header
                    titulo='Neflis'
                />
                <ListaPeliculas />
                <Footer
                    fecha={fecha}
                />
            </div>
        )
    }
}
