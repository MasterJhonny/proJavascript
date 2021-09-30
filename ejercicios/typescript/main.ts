import Alumno from "./Alumno";

let juan = new Alumno("Juan", 34, "2do second");

juan.printData();































// repasso interfaces de TypeScrpt

// enum Color {
//     red = "Red",
//     green = "Green",
//     yellow = "Yellow",
//     blue = "Blue"
// }

// interface Cuadrado {
//     lado: number;
//     color?: Color;
// }

// let cua: Cuadrado = {
//     lado: 23,
//     //color: Color.green
// }

// function areaCuadrado(c: Cuadrado) {
//     return c.lado * c.lado;
// }

// console.log(`El area de el cuadrado es de: ${areaCuadrado(cua)}`)
// cua.toString = function(){
//     return this.color ? `Un cuadrado de color ${this.color}`: 'Un cuadrado.'
// }

// console.log(cua.toString())
// console.log("hola mundo de vida y de todo lo slados");