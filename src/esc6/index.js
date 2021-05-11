//esc6
function newFunction (nombre = 'Diego', edad = 23, pais = 'MX'){
    //Template literals
    console.log(`Mi nombre es ${nombre}, mi edad es ${edad} y mi pais es ${pais}`);
}

newFunction();

//Variables multilinea
let frase = `Este es un texto que tiene mas de una linea,
ya que estamos probando su efectividad`;

console.log(frase);


//Manejo de Objetos esc6
person = {
    'name': "Diego",
    'age': 23,
    'country': 'MX'
}

let = {name, age, country} = person;
console.log(name, age, country);


//Spread Operator
let team1 = ['Oscar','Diego','Pancgo'];
let team2 = ['Sali','Pancha'];

let Education = ['Panfilo', ...team1, ...team2];
console.log(Education);


//Asignacion de Obj 
let name = 'Diego';
let age = 21;

obj = {name, age};
console.log(obj);

const names = [
    {'name' : 'Diego', 'age': 23},
    {'name' : 'Alejandro', 'age': 24},
]

//Arrow functions 

//Opcion 1
let listOfName = names.map(itm => console.log(itm.name));

//Opcion 2
const listOfName2 = (name,age) =>{

}

//Opcion 3
const listOfName3 = name =>{

}

//Opcion 4
const square = num => num * num;

//Promesas
const helloPromise = () => {
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hola');
        }else{
            reject('Error');
        }
    })
}

helloPromise()
.then(response => console.log(response))
.catch(error => console.log(error));

class Calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2, 4));


function* helloWorld (){
    if(true){
        yield 'Hello';
    }
    if(true){
        yield 'World!';
    }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

const names = [
    {Nombre : 'Juan', Apellido: 'Perez', Edad: 23, Experiencia: 2},
    {Nombre : 'Diego', Apellido: 'Garcia', Edad: 27, Experiencia: 1},
    {Nombre : 'Pancho', Apellido: 'Arevalo', Edad: 15, Experiencia: 21},
    {Nombre : 'Jaime', Apellido: 'Ramirez', Edad: 40, Experiencia: 2},
    {Nombre : 'Memo', Apellido: 'Alvarez', Edad: 30, Experiencia: 3},
    {Nombre : 'Ariel', Apellido: 'Fonseca', Edad: 30, Experiencia: 8},
]
let col = 'Nombre';
let Campo = {col} = names[0];
console.log(Campo);