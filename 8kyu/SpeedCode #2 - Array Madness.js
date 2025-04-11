
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each 
// element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

// Цель
// Даны два целых массива a, b, оба из length >= 1 которых содержат true. Создайте программу, которая возвращает , 
// если сумма квадратовa каждого элемента в строго больше, чем сумма кубов каждого элемента в b.

// Например.

// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

function arrayMadness(a, b) {
    let sumA = 0;
    let sumB = 0;
    a.map((el) => sumA += el*el);
    b.map((el) => sumB += el*el*el);
    return sumA > sumB? true: false;
}

  console.log(arrayMadness([4, 5, 6], [1, 2, 3]));
  