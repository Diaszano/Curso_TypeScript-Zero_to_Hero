# Type Annotation

O Type Annotation serve para termos como controlar o tipo de dado que 
estamos lidando no programa no programa e assim ter uma maior prevenção 
de erros.

Aqui temos um exemplo de código em JavaScript

```javascript
// Variáveis
let nome = 'Lucas Dias';
console.log(nome);

// Arrays
let animais = ['Elefante', 'Urso', 'Baleia'];
console.log(animais);

// Objetos
let carro;
carro = { nome: 'Gol', ano: 2010, preco: 22000 };
console.log(carro);

// Funções
function multiplicarNumeros(x, y) {
    return x * y;
}
console.log(multiplicarNumeros(5, 7));
```

Aqui temos o exemplo em TypeScript com o Type Annotation

```typescript
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
```

E é assim basicamente como se usa o Type Annotation em TypeScript.