"use strict";
// ! ● Exercício 4:
// ? Escreva um algoritmo que leia uma lista de números inteiros e mostre o maior deles.
let array = [2, 3, 6, 2, 5, 7, 9, 10, 42, 22, 66, 33, 77, 11];
let biggestNumber = calcBgNumber(...array);
document.write(`El número más grande es: ${biggestNumber}<br/>`);
function calcBgNumber(...numbers) {
    let biggestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > biggestNumber) {
            biggestNumber = numbers[i];
        }
    }
    return biggestNumber;
}
