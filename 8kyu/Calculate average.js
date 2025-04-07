// Description:
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

// Описание:
// Напишите функцию, которая вычисляет среднее значение чисел в заданном массиве.

// Примечание: Пустые массивы должны возвращать 0.

function findAverage(array) {
    let sum = 0;
    if(array.length === 0){
        return sum;
    } else {
    array.forEach(elem => {
        sum += elem;
    });
    return sum/array.length;
}
}

console.log(findAverage([1,2,3]));