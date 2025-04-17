// Create a function that returns the sum of the two lowest positive numbers given an array of
// minimum 4 positive integers. No floats or non-positive integers will be passed.
//
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
//     [10, 343445353, 3453445, 3453545353453] should return 3453455.
//
// Создайте функцию, которая возвращает сумму двух наименьших положительных чисел из массива,
// состоящего как минимум из 4 положительных целых чисел. Не будут передаваться числа с плавающей
// точкой или неположительные целые числа.
//
// Например, если массив передается как [19, 5, 42, 2, 77], то на выходе должно быть 7.
//
//     [10, 343445353, 3453445, 3453545353453] должен вернуться 3453455.

function sumTwoSmallestNumbers(numbers) {
  const arr =numbers.sort((a,b)=> a-b);
  return arr[0] + arr[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));