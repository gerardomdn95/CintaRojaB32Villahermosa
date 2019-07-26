// 1. Hacer superclase Maestro y subclases Maestro de Física y
//   Maestro de Música y a cada uno asignarle su materia y
//   calcular su promedio de grupo a partir de calificaciones
//   (puedes usar arreglos). El maestro de física tiene un
//   atributo “antiguedad” que guarda un valor numerico,
//   mientras que el maestro de música tiene un atributo “edad”
//   también guardando                                                                                                                                          un valor numérico.

class Maestro {
    constructor(calificaciones) {
        this.calificaciones = calificaciones;
    }

    calcularPromedio() {
        var noCalificaciones = this.calificaciones.length;
        var sumatoriaCalificaciones = 0;
        this.calificaciones.forEach(function(cal) {
            sumatoriaCalificaciones += cal;
        });
        return sumatoriaCalificaciones / noCalificaciones;
    }
}

class MaestroDeFísica extends Maestro {
    constructor(calificaciones, antiguedad) {
        super(calificaciones);
        this.antiguedad = antiguedad
        this.materia = "Física";
    }
}

class MaestroDeMusica extends Maestro {
    constructor(calificaciones, edad) {
        super(calificaciones);
        this.edad = edad;
        this.materia = "Música";
    }
}

var maestro = new Maestro([10, 9, 8]);
var fisica = new MaestroDeFísica([10, 9, 8], 4);
var musica = new MaestroDeMusica([10, 9, 8], 28);

console.log(maestro);
console.log(fisica);
console.log(musica);
