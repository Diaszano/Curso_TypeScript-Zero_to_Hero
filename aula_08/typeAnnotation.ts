// Variáveis [Type Annotations]
let nome:string = 'Lucas Dias';
console.log(nome);

// Arrays [Type Annotations]
let animais:string[] = ['Elefante','Urso','Baleia'];
console.log(animais);

// Objetos [Type Annotations]
let carro:{
    nome:string;
    ano:number;
    preco:number;
};

carro = {nome: 'Gol', ano:2010, preco:22000};

console.log(carro);

// Funções [Type Annotations]
function multiplicarNumeros(x:number,y:number):number{
    return x * y;
}

console.log(multiplicarNumeros(5,7));