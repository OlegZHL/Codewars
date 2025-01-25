// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


// Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

// Например:

// Учитывая, [34, 15, 88, 2] ваше решение вернет 2
// Учитывая, [34, -345, -1, 100] ваше решение вернет -345
// Для целей этой задачи можно предположить, что предоставленный массив не будет пустым.


let arr = [34, 15, 88, -2];

function findSmallestInt(arr) {
    let theSmallestNumber = arr[0];
    for(let i = 0; i < arr.length; i++){
        if( theSmallestNumber > arr[i]){
            theSmallestNumber = arr[i];
        }
    }
    return theSmallestNumber;
}

findSmallestInt(arr);
console.log(findSmallestInt(arr));