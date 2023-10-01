//Imprimir impares 1-20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

//Disminuir múltiplos de 3
for (let i = 100; i >= 0; i--) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

//Imprime la secuencia [4, 2.5, 1, -0.5, -2, -3.5]
let valor = 4;
for (let i = 0; i < 6; i++) {
    console.log(valor);
    valor -= 1.5;
}

//Sigma, suma de valores de 1 a 100
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Factorial, multiplicacion de valores del 1 al 12
let product = 1;
for (let i = 1; i <= 12; i++) {
    product *= i;
}
console.log(product);
