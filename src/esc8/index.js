//Convertir un objeto a una matriz
const data = {
    frontend: 'Diego',
    backend: 'Manuel',
    tester: 'Ana',
}

const entries = Object.entries(data);
console.log(entries);

const values = Object.values(data);
console.log(values);

const string = 'hello';
console.log(string.padStart(10,' ----'));