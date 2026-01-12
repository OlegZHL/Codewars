// Создайте функцию, которая проверяет, делится ли первый аргумент n на все остальные аргументы
// (возвращает true, если других аргументов нет)
//
// Пример:
//
// (6,1,3)--> true because 6 is divisible by 1 and 3
// (12,2)--> true because 12 is divisible by 2
// (100,5,4,10,25,20)--> true
// (12,7)--> false because 12 is not divisible by 7

function isDivisible(...array){

    let number = array[0];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        (number % array[i] === 0)?count++:count--;
    }
    return count === array.length;
}

console.log(isDivisible(6,2,3));