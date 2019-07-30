const request = require("request");
const rp = require("request-promise");

// const getName = (num) => {
//     return new Promise((resolve, reject) => {
//         request.get(`https://swapi.co/api/people/${num}/`, (err, response, body) => {
//             const character = JSON.parse(body);
//             response.statusCode === 200
//                 ? resolve(character)
//                 : reject(`Error: ${response.statusCode}`)
//         });
//     });
// }

const getName = (num) => {
    let options = {
        method: 'GET',
        uri: `https://swapi.co/api/people/${num}/`,
        body: {
            some: 'payload'
        },
        json: true // Automatically stringifies the body to JSON
    };
    const json = rp(options);
    return json;
}

const getFilm = (num) => {
    let options = {
        method: 'GET',
        uri: `https://swapi.co/api/films/${num}/`,
        body: {
            some: 'payload'
        },
        json: true // Automatically stringifies the body to JSON
    };
    const json = rp(options);
    return json;
}

getName(1).then(personaje => {
    personaje.peliculas = [];
    console.log(personaje);
    personaje.films.forEach(film => {
        let options = {
            method: 'GET',
            uri: film,
            body: {
                some: 'payload'
            },
            json: true // Automatically stringifies the body to JSON
        };
        rp(options).then(film => {
            personaje.peliculas.push(film);
        });
    });
    console.log(personaje);
    setTimeout(() => {
        console.log("--------------------------------------");
        console.log(personaje);
    }, 10000);
});