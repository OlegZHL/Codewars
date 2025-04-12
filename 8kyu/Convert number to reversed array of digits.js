// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]


// Вам дано случайное неотрицательное число, и вы должны вернуть цифры этого числа в массиве в обратном порядке.

// Пример (Ввод => Вывод):
// 35231 => [1,3,2,5,3]
// 0     => [0]


function digitize(n) {
   return (String(n).split("").reverse()).map((elem)=> Number(elem));
  }

console.log(digitize(35231));