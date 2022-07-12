"use strict";
// ? ● Exercício 1:
// O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem
// do distribuidor e dos
// impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja
// de 28% e os impostos de
// 45%, escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao
// consumidor.
let manofactoyCost = 1000;
let distributorCost = 0.28;
let tax = 0.45;
let totalCost = manofactoyCost + (manofactoyCost * distributorCost) + (manofactoyCost * tax);
console.log(`Precio del carro: ${totalCost}`);
// ? ● Exercício 2:
// Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno.
// Considerar que a média é
// ponderada e que o peso das notas é: 2,3 e 5.
let note1 = 10;
let note2 = 8;
let note3 = 9;
let weight1 = 2;
let weight2 = 3;
let weight3 = 5;
let finalNote = (weight1 * note1 + weight2 * note2 + weight3 * note3) / (weight1 + weight2 + weight3);
console.log(`Nota final: ${finalNote}`);
// ? ● Exercício 3:
// Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
// mostre-a expressa apenas em
// dias.
let years = 20;
let months = 5;
let days = 10;
// Arrow function to get age in days
let ageInDays = (years, months, days) => years * 365 + months * 30 + days;
console.log(`La edad en días es: ${ageInDays(years, months, days)}`);
// ● Exercício 4:
// Escreva um algoritmo que leia uma lista de números inteiros e mostre o maior deles.
let array = [2, 3, 6, 2, 5, 7, 9, 10, 42, 22, 66, 33, 77, 11];
let biggestNumber = calcBgNumber(...array);
console.log(`El número más grande es: ${biggestNumber}`);
function calcBgNumber(...numbers) {
    let biggestNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > biggestNumber) {
            biggestNumber = numbers[i];
        }
    }
    return biggestNumber;
}
// ● Exercício 5:
// Escreva um algoritmo que leia uma lista de números inteiros e retorne os números primos.
var c = 100;
var j = 2;
var numerosPrimos = [];
for (; j < c; j++) {
    if (primo(j)) {
        numerosPrimos.push(j);
    }
}
console.log(numerosPrimos);
function primo(numero) {
    for (var i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    return numero !== 1;
}