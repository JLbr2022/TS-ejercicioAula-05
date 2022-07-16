// ! ● Exercício 5:
// ? Escreva um algoritmo que leia uma lista de números inteiros e retorne os números prims.

var PnQuantity = 50;
var numPrimeStart = 2;
var primeNumbers: number[] = [];

for (; numPrimeStart < PnQuantity; numPrimeStart++) {
  if (prime(numPrimeStart)) {
    primeNumbers.push(numPrimeStart);
  }
}

document.write(`Números primarios:  ${primeNumbers}<br/>`);

function prime(num: number) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;
    } else {
      return false;
    }
  }
  return num !== 1;
}
