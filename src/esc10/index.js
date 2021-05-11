let arreglo = [1,2,3,4,[5,6,7,[8,9]]];

//método que nos permite aplanar arreglos.
console.log(arreglo.flat());

//Nos manipular la data para luego poder aplanar.
console.log(arreglo.flatMap(value => [value,value * 2]));

//Eliminar espacios de un string;
let mensaje = '            Hola';
console.log(mensaje.trimStart());

let mensaje2 = 'Hola           ';
console.log(mensaje.trimEnd());

//Try catch ya no necesita catch(error)

try{

}catch{
    error
}

//Es lo opuesto a entries ya que el arreglo te lo convierte a objeto
let entries = [["name","oscar"],["age",2]];
console.log(Object.fromEntries(entries));

//permite regresar el descripcion opcional del Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);


