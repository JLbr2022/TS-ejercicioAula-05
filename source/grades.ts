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

function calcGradeAverage(
  note1: number,
  note2: number,
  note3: number,
  weight1: number,
  weight2: number,
  weight3: number
) {
  return (
    (note1 * weight1 + note2 * weight2 + note3 * weight3) /
    (weight1 + weight2 + weight3)
  );
}

let finalGrade = calcGradeAverage(
  note1,
  note2,
  note3,
  weight1,
  weight2,
  weight3
);

document.write(`Nota final: ${finalGrade}<br/>`);
