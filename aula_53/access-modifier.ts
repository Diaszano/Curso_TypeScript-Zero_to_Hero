export {};

// Exemplo 01 - Modificador: Public
class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

const estudante = new Estudante();

estudante.codigoEstudante = 19101571;
estudante.nomeEstudante = 'Lucas Dias';

console.log(estudante);

// Exemplo 02 - Modificador: Private
class Estudante_02{
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number;

    constructor(codigoEstudante: number,nomeEstudante: string,idade: number){
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }

    toString():string{
        return 'Código do Aluno...: '+this.codigoEstudante+
        '\nNome do Aluno...: '+this.nomeEstudante+'\nIdade do Aluno...: '
        +this.idade;
    }
}

const estudante_02 = new Estudante_02(19101571,'Lucas Dias',21);

console.log('\n');
console.log(estudante_02.toString());

// Exemplo 03 - Modificador: Protected
class Estudante_03 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

class Pessoa extends Estudante_03 {
    private curso:string;

    constructor(codigoEstudante: number, nomeEstudante: string, curso:string) {
        super(codigoEstudante,nomeEstudante);
        this.curso = curso;
    }

    toString():string{
        return 'Código do Aluno...: '+this.codigoEstudante+
        '\nNome do Aluno...: '+this.nomeEstudante+'\nCurso do Aluno...: '
        +this.curso;
    }
}
const pessoa = new Pessoa(19101571,'Lucas Dias','Eng de Computação');

console.log('\n');
console.log(pessoa.toString());