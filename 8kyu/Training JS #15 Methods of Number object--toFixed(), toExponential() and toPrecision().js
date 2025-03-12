// Task
// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of elements which are smaller than n and return it.

// for example:

// howManySmaller([1.234,1.235,1.228],1.24) should return 2
// howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
// howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2

// Задача
// Кодирование в функции howManySmaller, функция принимает 2 параметра:arr и n. arr является десятичным массивом. n является десятичным числом.

// Первая задача: пусть все элементы массива содержат два десятичных знака (не нужно преобразовывать число n).

// Вторая задача: переберите массив arr, посчитайте количество элементов, которые меньше n, и верните результат.

// например:

// howManySmaller([1.234,1.235,1.228],1.24) should return 2
// howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
// howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2

function howManySmaller(arr, n) {
  let arr1 = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i].toFixed(2));
    if (arr1[i] < n) {
      count += 1;
    }
  }
  return count;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
