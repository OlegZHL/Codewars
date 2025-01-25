// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.
// Верните свой ответ в виде числа.


let arr = ['5', '0', 9, 3, 2, 1, '9', 6, 7];

function sumArray(ar1){
    let sum = 0;
    for(let i = 0; i < ar1.length; i++){
        sum = sum + Number(ar1[i]);
    }
    return sum;
}

sumArray(arr);
console.log(sumArray(arr));