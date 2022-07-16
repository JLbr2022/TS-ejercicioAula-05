// ! ● Exercício 3:
// ? Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e
// mostre-a expressa apenas em
// dias.

let years = 20;
let months = 5;
let days = 10;

// Arrow function to get age in days
let ageInDays = (years: number, months: number, days: number) =>
  years * 365 + months * 30 + days;

document.write(`La edad en días es: ${ageInDays(years, months, days)}<br/>`);
