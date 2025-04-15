// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.


// Для заданного набора чисел верните аддитивную обратную величину для каждого из них. Каждое положительное число становится отрицательным, 
// а отрицательное — положительным.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// Можно предположить, что все значения являются целыми числами. Не изменяйте входной массив.


function invert(array) {
    return array.map((elem) => elem*(-1));
 }

console.log(invert([1, -2, 3, -4, 5]));