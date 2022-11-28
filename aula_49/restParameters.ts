export {};

// Exemplo 01 - Rest Parameters
function somarNumeros(...numeros:Array<number>):number{
    let total:number = 0;
    numeros.forEach((numeros) => (total += numeros));
    return total;
}

console.log(somarNumeros(1,1,2,2,3,3,4,5,6,7,8,8,9,10));

// Exemplo 02 - Rest Parameters

function listarFrutas(frase: string, ...frutas: string[]) {
    return frase + ' ' + frutas.join(', ');
}

console.log(
    listarFrutas(
        'Lucas, você precisa ir na feira para comprar...:',
        '🥥','🍓','🍌','🍍',
    ),
);

// ==> Exemplo 03 - Rest Parameters
class Produtos {
    public exibirProdutos(...produtos: string[]): void {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();
console.log(
    'Todos os produtos do departamento de Informática '+
    'disponíveis no estoque...: ',
);

departamentoInformatica.exibirProdutos(
    'Mouse','Notebook','USB','Monitor','Teclado','WebCam'
);