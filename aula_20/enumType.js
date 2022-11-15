"use strict";
// Exemplo 01 - Numeric Enums
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugu\u00EAs"] = 0] = "Portugu\u00EAs";
    Idioma[Idioma["Espanhol"] = 1] = "Espanhol";
    Idioma[Idioma["Ingles"] = 2] = "Ingles";
    Idioma[Idioma["Franc\u00EAs"] = 3] = "Franc\u00EAs";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// Exemplo 02 - String Enums
//! Não é muito recomendado utilizar esse tipo de ENUM
var Dia;
(function (Dia) {
    Dia["Segunda"] = "SEG";
    Dia["Ter\u00E7a"] = "TER";
    Dia["Quarta"] = "QUA";
    Dia["Quinta"] = "QUI";
    Dia["Sexta"] = "SEX";
    Dia["S\u00E1bado"] = "SAB";
    Dia["Domingo"] = "DOM";
})(Dia || (Dia = {}));
console.log(Dia.Sexta);
function comida(c) {
    return 'Comidas muito apetitosas!';
}
console.log(comida(2 /* Comida.Pizza */));
console.log(comida(4 /* Comida.Churrasco */));
console.log(comida(5)); //! Perigo aqui era pra dar erro, mas não dá.
function comida2(c) {
    return 'Comidas muito apetitosas!';
}
console.log(comida(2 /* Comida.Pizza */));
console.log(comida(4 /* Comida.Churrasco */));
// console.log(comida(5)); // Agora sim dá o erro
// Exemplo 04 - Quando usar enum?!
var Tarefa;
(function (Tarefa) {
    Tarefa[Tarefa["Todo"] = 0] = "Todo";
    Tarefa[Tarefa["Progress"] = 1] = "Progress";
    Tarefa[Tarefa["Done"] = 2] = "Done";
})(Tarefa || (Tarefa = {}));
const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
};
if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluída!');
}
