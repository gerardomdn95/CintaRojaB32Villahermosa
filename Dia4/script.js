let criatura;


fetch("https://pokeapi.co/api/v2/pokemon/pikachu/").then(request => {
    if(request.status === 200) {
        Swal.fire(
            'Good job!',
            'You clicked the button!',
            'success'
        );
        request.json().then(data => {
            criatura = new Pokemon(data.name, data.sprites.front_default, data.id, data.moves[0].move.name, data.moves[1].move.name, data.moves[2].move.name, data.moves[3].move.name);
        });
    } else {
        alert("Pokemon no encontrado");
    }
});

console.log(criatura);

setTimeout(() => {
    console.log(criatura);
}, 1000);


// Clase Pokemon
// Nombre
// Imagen
// Id
// Movimientos {4}

// new 

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