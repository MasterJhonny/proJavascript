import Perro from './Perro';




let masha = new Perro("Masha", "negro", 2);
console.log(masha);








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
// console.log("hola mundo de vida y de todo lo slados")