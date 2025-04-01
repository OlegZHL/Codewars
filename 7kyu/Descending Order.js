// Description:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in 
// descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

// Описание:
// Ваша задача — создать функцию, которая может принимать в качестве аргумента любое неотрицательное целое число и возвращать 
// его с цифрами в порядке убывания. По сути, нужно переставить цифры так, чтобы получилось максимально возможное число.

// Примеры:
// Ввод: 42145 Вывод: 54421

// Ввод: 145263 Вывод: 654321

// Ввод: 123456789 Вывод: 987654321


function descendingOrder(n){ 
    let str = (String(n)).split("");
    let num = +((str.sort((a,b) => b-a)).join(""));
    return num;
}

console.log(descendingOrder(42145));