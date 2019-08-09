import React, { Component } from 'react'
import axios from 'axios'
import { Card } from '../../components/Card/Card';

export class MainContainer extends Component {

    state = {
        name: "",
        pokemon: {}
    }

    findPokemon() {
        const name = this.state.name;
        
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then(pokemon => {
            this.setState({pokemon: pokemon.data})
        })
        .catch(err => console.log(err))
    }

    handleChange(event) {
        event.preventDefault();

        this.setState({name: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <input type="text" onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.findPokemon} type="button" className="btn btn-primary">Buscar</button>
                    <Card />
                </div>
            </div>
        )
    }
}

export default MainContainer
