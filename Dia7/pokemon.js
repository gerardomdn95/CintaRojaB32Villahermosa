class Pokemon {
    constructor(nombre, imagen, id, move1, move2, move3, move4) {
        this.name = nombre;
        this.imagen = imagen;
        this.id = id;
        this.movimientos = {
            movimiento1: move1,
            movimiento2: move2,
            movimiento3: move3,
            movimiento4: move4
        }
    }
}

module.exports = {
    Pokemon
}