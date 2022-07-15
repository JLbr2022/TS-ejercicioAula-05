"use strict";
// ! ● Exercício 1:
// ? 45%, escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao
// ? consumidor.
// O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem
// do distribuidor e dos
// impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja
// de 28% e os impostos de
let manofactoryCost = 5000;
const dealerCost = 0.28;
const tax = 0.45;
function calcValue(manofactoryCost, dealerCost, tax) {
    return manofactoryCost + manofactoryCost * dealerCost + manofactoryCost * tax;
}
let totalCost = calcValue(manofactoryCost, dealerCost, tax);
document.write(`Precio del carro: ${totalCost}<br/>`);
// ! ● Exercício 2:
// ? Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste aluno.
// Considerar que a média é
// ponderada e que o peso das notas é: 2,3 e 5.
let note1 = 10;
let note2 = 8;
let note3 = 9;
let weight1 = 2;
let weight2 = 3;
let weight3 = 5;
function calcGradeAverage(note1, note2, note3, weight1, weight2, weight3) {
    return ((note1 * weight1 + note2 * weight2 + note3 * weight3) /
        (weight1 + weight2 + weight3));
}
let finalGrade = calcGradeAverage(note1, note2, note3, weight1, weight2, weight3);
document.write(`Nota final: ${finalGrade}<br/>`);
// ! ● Exercício 3:
// ? Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
// mostre-a expressa apenas em
// dias.
let years = 20;
let months = 5;
let days = 10;
// Arrow function to get age in days
let ageInDays = (years, months, days) => years * 365 + months * 30 + days;
document.write(`La edad en días es: ${ageInDays(years, months, days)}<br/>`);
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
// ! ● Exercício 5:
// ? Escreva um algoritmo que leia uma lista de números inteiros e retorne os números prims.
var PnQuantity = 50;
var numPrimeStart = 2;
var primeNumbers = [];
for (; numPrimeStart < PnQuantity; numPrimeStart++) {
    if (prime(numPrimeStart)) {
        primeNumbers.push(numPrimeStart);
    }
}
document.write(`Números primarios:  ${primeNumbers}<br/>`);
function prime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return true;
        }
        else {
            return false;
        }
    }
    return num !== 1;
}
