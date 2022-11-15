"use strict";
// Exemplo 01 - Uso simples de Tuplas em TypeScript
let pessoa;
pessoa = ['Lucas Dias', 'Estudante', 21];
console.log(pessoa);
// Exemplo 02 - Acessando o valor da Tupla
let pessoa1;
pessoa1 = ['Lucas Dias', 'Estudante', 21];
console.log("Nome: " + pessoa1[0]);
// Exemplo 03 - Outra forma de usar Tuplas em TypeScript (com labels)
let pessoa2 = [
    'Lucas Dias', 'Estudante', 21
];
console.log(pessoa2);
// Exemplo 04 - Usando Tuplas com Spread Operator
let listaFrutas = ['🍍', '🍊', '🍎', '🍉', '🥭'];
console.log(...listaFrutas);
// Exemplo 05 - Lista Heterogênea de Tupla
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(...listaFrutas2);
// Exemplo 06 - Uso de função com Tuplas
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['Lucas Dias', 'Raila'], [21, 22]);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Lucas', 'dos Santos'));
console.log(criarPessoa('Lucas', 'Dias', 'dos Santos'));
