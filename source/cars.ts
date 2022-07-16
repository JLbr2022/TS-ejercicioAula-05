// ! ● Exercício 1:
// ? 45%, escrever um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao
// ? consumidor.
// O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem
// do distribuidor e dos
// impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja
// de 28% e os impostos de 45%.

let manofactoryCost = 5000;
const dealerCost = 0.28;
const tax = 0.45;

function calcValue(manofactoryCost: number, dealerCost: number, tax: number) {
  return manofactoryCost + manofactoryCost * dealerCost + manofactoryCost * tax;
}

let totalCost = calcValue(manofactoryCost, dealerCost, tax);

document.write(`Precio del carro: ${totalCost}<br/>`);
