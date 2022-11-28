# Type Object

Nesta aula aprendemos como lidar com Classes em TypeScript.

Aqui temos o exemplos em TypeScript como se pode lida com Classes

```typescript
// Exemplo 01 - Classes
class Pessoa {
    nome:string;
    sobrenome:string;

    constructor(nome:string,sobrenome:string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto():string{
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Lucas','Dias');
console.log(pessoa.nomeCompleto());

// Exemplo 02 - Classes (sem construtor)
class Estudante {
    codigoEstudante:number;
    nomeEstudante:string;
}

// Criar um objeto ou a instancia
const estudante = new Estudante();

// Inicializar o objeto
estudante.codigoEstudante = 19101571;
estudante.nomeEstudante = 'Lucas Dias';

// Acessar os campos
console.log('Código do Estudante ... : ' + estudante.codigoEstudante);
console.log('Nome do Estudante ... : ' + estudante.nomeEstudante);
```