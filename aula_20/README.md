# Type Enum

Nesta aula aprendemos como lidar com o tipo Enum em TypeScript.

Aqui temos o exemplos em TypeScript como se pode lida com Enum

```typescript
// Exemplo 01 - Numeric Enums

enum Idioma {
    Português,
    Espanhol,
    Ingles,
    Francês,
}

console.log(Idioma);

// Exemplo 02 - String Enums
//! Não é muito recomendado utilizar esse tipo de ENUM
enum Dia {
    Segunda='SEG',
    Terça='TER',
    Quarta='QUA',
    Quinta='QUI',
    Sexta='SEX',
    Sábado='SAB',
    Domingo='DOM',
}

console.log(Dia.Sexta);

// Exemplo 03 - Como podemos acessar um valor de um Enum com uma chave: 
// (usando o const)

const enum Comida {
    Hamburger,
    Massa,
    Pizza,
    Torta,
    Churrasco,
}

function comida(c: Comida) {
    return 'Comidas muito apetitosas!';
}
console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
console.log(comida(5));//! Perigo aqui era pra dar erro, mas não dá.

const enum Comida2 {
    Hamburger = 'Hamburger',
    Massa = 'Massa',
    Pizza = 'Pizza',
    Torta = 'Torta',
    Churrasco = 'Churrasco',
}

function comida2(c: Comida) {
    return 'Comidas muito apetitosas!';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// console.log(comida(5)); // Agora sim dá o erro

// Exemplo 04 - Quando usar enum?!
enum Tarefa {
    Todo,
    Progress,
    Done,
}

const concluidaTarefa = {
    id: 1,
    status: Tarefa.Done,
    descricao: 'Parabéns! Tarefa concluída com sucesso!',
};

if (concluidaTarefa.status === Tarefa.Done) {
    console.log('Enviar e-mail: Tarefa Concluída!');
}
```