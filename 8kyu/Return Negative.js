// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
// В этом простом задании вам дано число, которое нужно сделать отрицательным. Но, может быть, число уже отрицательное?
// Примечания
// Это число уже может быть отрицательным, и в этом случае никаких изменений не требуется.
// Ноль (0) не проверяется на наличие какого-либо конкретного знака. Отрицательные нули не имеют математического смысла.

// function makeNegative(num) {
//     // Code?
//   }

let num = 1594;

function makeNegative(num) {
  if (num > 0) {
    return num * -1;
  } else {
    return num;
  }
}

makeNegative(num);

console.log(makeNegative(num));
