// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 
// If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.


// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Числа могут быть отрицательными или нецелочисленными. 
// Если массив не содержит чисел, вы должны вернуть 0.

// Примеры
// Входные данные: [1, 5.2, 4, 0, -1]
// Выходной сигнал: 9.2

// Входные данные: []
// Выходной сигнал: 0

// Входные данные: [-2.398]
// Выходной сигнал: -2.398

// Предположения
// Вы можете предположить, что вам даны только цифры.
// Вы не можете предположить размер массива.
// Вы можете предположить, что получаете массив, и если массив пуст, вернуть 0.

function sum (numbers) {
    let sum = 0;
    numbers.map((elem) => sum+=elem);
    return sum;
}

console.log(sum([1, 5.2, 4, 0, -1]));