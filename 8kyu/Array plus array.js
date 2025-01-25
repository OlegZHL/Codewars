// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

// Я новичок в программировании и сейчас хочу получить сумму двух массивов... Точнее, сумму всех их элементов. Буду признателен за вашу помощь.

// P.S. Каждый массив содержит только целые числа. Результат тоже является числом.

let array1 = [-1, -2, -3, -9];
let array2 = [-4, -5, -16];

function arrayPlusArray(arr1, arr2) {
    let sum1 = 0;
    let sum2 = 0;
    for (i = 0; i < arr1.length; i++){
        sum1 += arr1[i];
    }
    for (i = 0; i < arr2.length; i++){
        sum2 += arr2[i];
    }
    let sum = sum1 + sum2;
    return sum;
} 
    
    arrayPlusArray(array1, array2);
    console.log(arrayPlusArray(array1, array2));