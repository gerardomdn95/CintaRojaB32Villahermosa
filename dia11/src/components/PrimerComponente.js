//rce genera el template del componente
import React from 'react'

export class Componente1 extends Component {
    render() {
        return (<h1>Hola Mundo</h1>
        )
    }
}

// Métodos
const PrimerComponente = () => (<h1>Hola Mundo</h1>);

const Componente2 = () => {
    return (<h1>Hola Mundo</h1>)
}

//Componente Padre
function Primer(){
    return (<h1>Hola Mundo</h1>)
}

export default PrimerComponente
