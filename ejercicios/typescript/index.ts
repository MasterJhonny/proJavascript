console.log("hello Typescript")

// type boolean
let muted: boolean = false;
muted = true;

// type number
let age = 6;
let numerador: number = 42;
let denominador: number = age;
let result = numerador/denominador;

// type string
let nombre: string = "Jhonny";
let saludo = `me llamo ${nombre}`;

// arreglos
let person: string[] = new Array();
person = ['Juan', 'John', 'Maria', 'Isabel'];

person.push(nombre);

let peopleNumbers: Array <string | number> = new Array();
peopleNumbers.push(nombre);
peopleNumbers.push(age);
peopleNumbers.push(1234);
peopleNumbers.push("maria");

// Enum
enum Color {
    red = 'rojo',
    green = 'verde',
    blue = 'azul',
    yellow = 'amarillo'
} 

let colorFibory: Color = Color.blue;
// console.log(`my color fabory is ${colorFibory}`);

// any
let comodin: any = "Johker";
comodin = { type: 'salterio'};

function add(a: number, b: number){
    return a + b;
}
function saludar(nombre: string){
    console.log(`hi, Me llamo ${nombre}`);
}
// saludar("Juan");

// cadena de Numbers
let cadena: Array <number | string> = [3, 2, "3", 4, 5];
let valores: String[] = ["1", "2", "3", "4", "34"];

enum fail {
    salida,
    entrada
}

// repaso typescript
// boolean 
let muteado: boolean = true;
muteado = false;

// number 
let valor = 23;
let num1: number = 23;
let fana = num1/valor;

// type string
let palabra:string = "palabra";
palabra = "2345";


// Array 
let frutas: String[] = new Array();

frutas.push("manzana");
frutas.push("pera");
frutas.push("naranja");
frutas.push("lima");

let numerosa: number[] = new Array();

numerosa.push(23);
numerosa.push(23);
numerosa.push(90);
numerosa.push(98);
numerosa.push(56);
numerosa.push(34);

// multiples tipos de datos
let duoArray: Array<number | String> = new Array();
duoArray.push(345)
duoArray.push("letras")
duoArray.push(345)
duoArray.push("fana")


// console.log(duoArray);

//enum
enum lados {
    Arriba = "up",
    Abajo = "down",
    Izquierda = "left",
    Derecha = "right"
}

let ladoElejido: lados = lados.Arriba;

// console.log(`el lado es: ${ladoElejido}`)


enum listaPersonas {
    first = "Raquel",
    second = "Monica",
    three = "Tereza",
    four = "Felipe"
}
let perosnElegida: listaPersonas = listaPersonas.second
// console.log(`El nombre es: ${perosnElegida}`);

// variable comodin any

let cualquierType: any = "comodin";
cualquierType = { key: "value" };

// type objeto
let objeto: Object  = {
    key: 345,
    value: "value"
};

//tuple listaPersonas
let x: [number, string];
x = [23, "value"];

// console.log(x[1])

// function
function suma (a: number, b: number): number {
    return a + b;
}

const val = suma(23,12);

// create add function

function createAdd(b: number ): (number) => number {
    return function (a: number ){
        return a + b;
    }
}

const fourSum = createAdd(34);
const fiveSum = fourSum(5);
// console.log(fiveSum); 

// parameter optional
function fullName(name: string, lastName: string  = "Smith"): string {
    return `${name} ${lastName}`
}

let carlos = fullName("Carlos");

// console.log(carlos);

// repaso function typescript
// function
function sumarNumber(a: number, b: number): number {
    return a + b;
}

let valorSumado = sumarNumber(23,23);

// creatdor de sumas
function creadorDeSumas(a: number): (number) => number {
    return function (b: number ) {
        return a + b;
    }
}


let sumarCuatro = creadorDeSumas(4);
let sumarAdemasSix = sumarCuatro(6);

// parametros opcionales or por defecto
function nombreCompleto (name: string, lastName: string = "Villagran"): String {
    return `${name} ${lastName}`
}


let nameFull = nombreCompleto("Carlos");
// console.log(nameFull);

// interfaces.
enum Colorcillo {
    red = "red",
    green = "green",
    yellow = "yellow"
}

interface Rectangulo {
    width: number;
    height: number;
    color?: Colorcillo

}

let rect: Rectangulo = {
    width: 12,
    height: 20,
    color: Colorcillo.yellow
}

//metodo
function AreaRectangulo (r: Rectangulo): number {
    return r.width * r.height;
}

// console.log(AreaRectangulo(rect));

rect.toString = function(){
    return this.color ? `Un rectangulo de color ${this.color}` : `Un rectangullo`
}

//console.log(rect.toString());

// repaso interfaces
interface Triangulo {
    lado1: number;
    lado2: number;
    base: number;
    altura?: number;
    color?: Colorcillo;
}

let triangulo: Triangulo = {
    lado1: 3,
    lado2: 3,
    base: 3,
    color: Colorcillo.yellow,
}

function areaTriangulo(tri: Triangulo): number {
    tri.altura = (tri.lado1 * Math.sqrt(3))/2
    return (tri.base * tri.altura)/2
}

let areaEquilatero = areaTriangulo(triangulo);
// console.log(areaEquilatero)
// console.log(triangulo)

triangulo.toString = function() {
    return this.color ? `un triangulo de color ${this.color}` : 'A triangule ';
}

// console.log(triangulo.toString())