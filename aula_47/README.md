# Default Parameters

Nesta aula aprendemos como lidar com o tipo Default Parameters em TypeScript.

Aqui temos o exemplos em TypeScript como se pode lida com Default Parameters

```typescript
// Exemplo 01 - Default Parameters
function descontoCompra(preco: number, desconto:number = 0.08) {
    return preco * (1 - desconto);
}

console.log(descontoCompra(100));

// Exemplo 02 - Default Parameters
function exibirMensagem(mensagem: string, saudar = 'Fala, pessoal!') {
    return saudar + ' ' + mensagem + '!';
}

console.log(exibirMensagem('JavaScript Developers'));

// Exemplo 03 - Default Parameters
function exibirNome(nome: string, sobrenome = 'Dias') {
    return nome + ' ' + sobrenome;
}

const resultado_1 = exibirNome('Lucas');
const resultado_2 = exibirNome('Lucas', undefined);

const resultado_3 = exibirNome('Lucas', 'Dias');

console.log(resultado_1);
console.log(resultado_2);
console.log(resultado_3);
```