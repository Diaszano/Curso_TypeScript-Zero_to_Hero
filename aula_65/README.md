# Propriedades Estáticas

Nesta aula aprendemos como lidar com Interface no TypeScript.

Aqui temos o exemplos em TypeScript como se pode lida com Interface em Classes

```typescript
// Exemplo 01 - Interface Simples

interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
};

function exibirNome(pessoa:Pessoa):string {
    return `
        Nome...: ${pessoa.nome}
        Sobrenome...: ${pessoa.sobrenome}
        Idade...: ${pessoa.idade}
    `;
};

const lucas = {
    nome: 'Lucas',
    sobrenome: 'Dias',
    idade: 21
};

console.log(exibirNome(lucas));

// Exemplo 02 - Interface com Propriedades Opcionais

interface Livro {
    titulo:string;
    autor:string;
    paginas?:number;
};

const livro:Livro = {
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
};

console.log(livro);

// Exemplo 03 - Interface com Propriedades de Somente Leitura e Opcionais

interface Carro {
    readonly modelo: string;
    ano:number;
    valor?:number;
};

const carro:Carro = {
    modelo:'Gol G5',
    ano:2010
};

console.log(carro);

// Exemplo 04 - Interface com implements Class

interface IAniaml {
    nome: string;
    idade: number;
    estaVivo: boolean;

    comer(tipoComida:string):void;
};

class Peixe implements IAniaml {
    nome:string;
    idade:number;
    estaVivo:boolean;

    constructor(nome:string, idade:number, estaVivo:boolean){
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string): void {
        console.log(`O Peixe ${this.nome} está comendo ${tipoComida}`);
    }
};

const peixe = new Peixe('Roberto',1,true);

console.log(peixe.comer('ração'));
```