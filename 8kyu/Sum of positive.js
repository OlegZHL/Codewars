// Task
// You get an array of numbers, return the sum of all of the positives ones.
//
//    Example
//     [1, -4, 7, 12] =>1 + 7 + 12 = 20
//
// Note
// If there is nothing to sum, the sum is default to 0.
//
// Задача
// Вы получаете массив чисел и возвращаете сумму всех положительных чисел.
//
//    Пример
//     [1, -4, 7, 12] =>1+7+12=20
// Примечание
// Если суммировать нечего, сумма по умолчанию равна 0.

function positiveSum(arr) {
    let sum = 0;
     arr.filter((item) => {
        if(item>0){
          return  sum+=item;
        }
    });
    return sum;
}

console.log(positiveSum([1, -4, 7, 12]));