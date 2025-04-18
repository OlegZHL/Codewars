// Task:
//     Given a list of integers, determine whether the sum of its elements is odd or even.
//
//     Give your answer as a string matching "odd" or "even".
//
//     If the input array is empty consider it as: [0] (array with a zero).
//
// Examples:
//     Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"
// Have fun!
//
// Задача:
//     Дан список целых чисел. Определите, является ли сумма его элементов нечётной или чётной.
//
//     Дайте свой ответ в виде строки , соответствующей "odd" или "even".
//
//     Если входной массив пуст, считайте его: [0] (массивом с нулём).
//
// Примеры:
//     Input: [0]
// Output: "even"
//
// Input: [0, 1, 4]
// Output: "odd"
//
// Input: [0, -1, -5]
// Output: "even"
// Получайте удовольствие!

function oddOrEven(array) {
   let sum = 0;
   array.map(item => sum+=item)
     let result = (sum%2)? "odd" : "even";
   return result;
}
console.log(oddOrEven([0, 1, 4]));