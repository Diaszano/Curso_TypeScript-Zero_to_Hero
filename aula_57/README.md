# Getters & Setters

Nesta aula aprendemos como lidar com Getters/Setters no TypeScript.

Aqui temos o exemplos em TypeScript como se pode lida com Getters/Setters em Classes

```typescript
// Exemplo 01: GET
class Quadrado {
    private _largura:number = 3;
    private _altura:number = 23;

    get calcularQuadrado():number{
        return this._altura * this._largura;
    }
}

const quadrado = new Quadrado();

console.log(quadrado.calcularQuadrado);

// Exemplo 02: SET
class Pessoa {
    nome:string;

    colocaNomePessoa(setNomePessoa:string){
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();

pessoa.colocaNomePessoa('Lucas Dias');
console.log('Meu nome é...: ' + pessoa.nome);

// Exemplo 03: GET

class Estudante {
    private _nome:string = 'Lucas Dias';
    private _semestre:number;
    private _curso:string;

    public get nome(){
        return this._nome;
    }
}

const estudante = new Estudante();

console.log(estudante.nome);

// Exemplo 05: GET/SET
class Estudante_05 {
    private _nome:string;
    private _semestre:number;
    private _curso:string

    constructor(nome:string,semestre:number,curso:string){
        this._nome = nome;
        this._semestre = semestre;
        this._curso = curso;
    }

    public get curso(){
        return this._curso;
    }

    public set curso(setCurso:string){
        this._curso = setCurso;
    }

    public get nome(){
        return this._nome;
    }

    public set nome(setNome:string){
        this._nome = setNome;
    }

    public get semestre(){
        return this._semestre;
    }

    public set semestre(setSemestre:number){
        this._semestre = setSemestre;
    }

    public toString():string{
        return 'Nome do Aluno...: ' + this.nome + '\n' +
            'Semestre do Aluno...: '+ this.semestre + '\n' +
            'Curso do Aluno...: '+ this.curso;
    }
}

const estudante_05 = new Estudante_05('Lucas Dias',5,'Eng Computação');

console.log('\n' + estudante_05.toString());

estudante_05.curso = 'Ciências da Computação';

console.log('\n' + estudante_05.toString());
```