// Exemplo 01 - Uso simples de Tuplas em TypeScript

let pessoa:[string,string,number];
pessoa = ['Lucas Dias','Estudante',21];

console.log(pessoa);

// Exemplo 02 - Acessando o valor da Tupla

let pessoa1:[string,string,number];
pessoa1 = ['Lucas Dias','Estudante',21];

console.log("Nome: " + pessoa1[0]);

// Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)

let pessoa2:[nome:string, profissão:string, idade:number] = [
    'Lucas Dias','Estudante',21
];

console.log(pessoa2);

// Exemplo 04 - Usando Tuplas com Spread Operator

let listaFrutas: [string, ...string[]] = ['🍍', '🍊', '🍎', '🍉', '🥭'];

console.log(...listaFrutas);

// Exemplo 05 - Lista Heterogênea de Tupla

let listaFrutas2:[number, boolean, ...string[]] = [5,true,...listaFrutas];

console.log(...listaFrutas2);

// Exemplo 06 - Uso de função com Tuplas

function listarPessoas(nomes:string[],idades:number[]){
    return [...nomes,...idades];
}

let resultado = listarPessoas(['Lucas Dias','Raila'],[21,22]);

// Exemplo 07 - Labeled Tuples com Spread Operador numa função

type Nome =
    | [primeiroNome: string, sobrenome:string]
    | [primeiroNome:string, nomeMeio:string, sobrenome:string];

function criarPessoa(... nome:Nome){
    return [...nome];
}

console.log(criarPessoa('Lucas','dos Santos'));
console.log(criarPessoa('Lucas','Dias','dos Santos'));