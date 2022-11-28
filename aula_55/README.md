# Readonly

Nesta aula aprendemos como lidar com Readonly no TypeScript.

Aqui temos o exemplos em TypeScript como se pode lida com Readonly em Classes

```typescript
// Exemplo 01
class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

// Exemplo 02
class Funcionario_02 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

// Exemplo 03
class Funcionario_03 {
    nome:string;
    readonly codigoFuncionario: number;

    constructor(nome:string, codigo:number) {
        this.nome = nome;
        this.codigoFuncionario = codigo;
    }
}

// Exemplo 04 - Interface
interface IFuncionario {
    codigoFuncionario:number;
    nomeEmpresa:string;
}

const funcionario_04: Readonly<IFuncionario> = {
    codigoFuncionario: 22,
    nomeEmpresa: 'Augen - Engenharia e Inovação'
}

// Quando é utilizado Readonly o valor não pode ser alterado.
// funcionario_04.codigoFuncionario = 32;
```