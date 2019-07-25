// var jupiter = {
//     masa: "1.899x10 27",
//     epoca: "J2000",
//     temperatura: {
//         minima: -163.15,
//         media: -121.15,
//         maxima: -71.15,
//     }
// }

// var saturno = {
//     masa: "3.899x10 27",
//     epoca: "J3000",
//     temperatura: {
//         minima: 163.15,
//         media: 121.15,
//         maxima: 71.15,
//     }
// }

// var mercurio = {
//     masa: "0.899x10 27",
//     epoca: "J1000",
//     temperatura: {
//         minima: 63.15,
//         media: 11.15,
//         maxima: 71.15,
//     }
// }

class Planeta {
    constructor(nombre, masa, epoca, minima, media, maxima, imagen) {
        this.nombre = nombre;
        this.masa = masa;
        this.epoca = epoca;
        this.temperatura = {
            minima: minima,
            media: media,
            maxima: maxima
        }
        this.imagen = imagen;
    };

    rotar() {
        console.log("Estoy rotando");
    };

    obtenAnioDePlaneta() {
        return this.masa * 3.5;
    };
};

var jupiter = new Planeta("Júpiter", 1.899, "J2000", 63.15, 11.15, 71.15);
var pluton = new Planeta("Plutón", 0.899, "J1000", 63.15, 11.15, 71.15);
var mercurio = new Planeta("Mercurio", 0.449, "J0000", 63.15, 11.15, 71.15);


// console.log(jupiter.masa);
// console.log(pluton.temperatura.minima);
// console.log(mercurio);

// jupiter.rotar();
// var tiempo = jupiter.obtenAnioDePlaneta();

// console.log(tiempo);

// Clase Perro
// Nombre, raza, edad, continentes [3]

// Método Ladrar, listar continentes
// A {nombrePerro} lo puedes encontrar en [3]

//  3 instancias

// class Perro {
//     constructor(nombre, raza, edad, continente) {
//         this.nombre = nombre,
//         this.raza = raza,
//         this.edad = edad,
//         this.continente = continente
//     }

//     ladrar() {
//         console.log("Ladrar");
//     }

//     obtenContinente() {
//         console.log(`A ${this.nombre} lo puedes encontrar en ${this.continente[0]}, ${this.continente[1]} y ${this.continente[2]}.`);
//     }
// }

// var bulldog = new Perro("Bully", "Bulldog", 12, ["Europa", "América", "Oceanía"]);

// bulldog.ladrar();
// bulldog.obtenContinente();

class Bebida {
    constructor(nombre, ml, imagen) {
        this.nombre = nombre;
        this.ml = `${ml} ml`;
        this.imagen = imagen;
    }
}

class BebidaAlcoholica extends Bebida {
    constructor(nombre, ml, gradoAlcohol, artesanal, imagen) {
        super(nombre, ml, imagen);
        this.gradosAlcohol = `${gradoAlcohol}% de alcohol`;
        this.artesanal = artesanal;
    }
}

class Refresco extends Bebida {
    constructor(nombre, ml, sabor, gramosAzucar, imagen) {
        super(nombre, ml, imagen);
        this.sabor = sabor;
        this.gramosAzucar = `${gramosAzucar} gr`;
    }
}

var agua = new Bebida("Agua natural", 600, "https://www.chedraui.com.mx/medias/750103240194-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8MjIwMjB8aW1hZ2UvanBlZ3xoNmEvaDJiLzg4MjcxNDU0MjA4MzAuanBnfDJiZTkwYTcxODk1OTI3ZDkxMWU5YTViNzhjNWJiZmYyYmQ1ZDU4M2EyODkzNjgxNzY2ZWZiMzMyNjFlYjcyMDk");
var cerveza = new BebidaAlcoholica("Cerveza", 600, 15, true, "https://www.chedraui.com.mx/medias/750103240194-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8MjIwMjB8aW1hZ2UvanBlZ3xoNmEvaDJiLzg4MjcxNDU0MjA4MzAuanBnfDJiZTkwYTcxODk1OTI3ZDkxMWU5YTViNzhjNWJiZmYyYmQ1ZDU4M2EyODkzNjgxNzY2ZWZiMzMyNjFlYjcyMDk");
var coca = new Refresco("Coca-Cola", 600, "Cola", 20, "https://www.chedraui.com.mx/medias/750103240194-00-CH515Wx515H?context=bWFzdGVyfHJvb3R8MjIwMjB8aW1hZ2UvanBlZ3xoNmEvaDJiLzg4MjcxNDU0MjA4MzAuanBnfDJiZTkwYTcxODk1OTI3ZDkxMWU5YTViNzhjNWJiZmYyYmQ1ZDU4M2EyODkzNjgxNzY2ZWZiMzMyNjFlYjcyMDk")

console.log(agua);
console.log(cerveza);
console.log(coca);

document.getElementById("agua").src = agua.imagen;
document.getElementById("nombreAgua").innerHTML = agua.nombre;
document.getElementById("aguaDescripcion").innerHTML = `Contenido de bebida: ${agua.ml}`;