const data = {
    frontend: 'Diego',
    backend: 'Manuel',
    tester: 'Ana',
}

let { frontend, ...all} = data;
console.log(all);


const data2 = {
    frontend: 'Diego',
    backend: 'Manuel',
}

const data3 = {
    ...data2,
    tester: 'Ana',
}

console.log(data3);


const helloworld = () => {
    return new Promise((resolve,reject) => {
        (true)
            ? resolve('Hello world')
            : reject(new Error('La cague'))
    });
};

helloworld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .then(() => console.log('Finalizado'))


const regexDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexDate.exec('1997-09-21');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);