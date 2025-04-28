// For "x", determine how many positive integers less than or equal to "x" are odd but not prime. Assume "x" is an integer between 1 and 10000.
//
// Example: 5 has three odd numbers (1,3,5) and only the number 1 is not prime, so the answer is 1
//
// Example: 10 has five odd numbers (1,3,5,7,9) and only 1 and 9 are not prime, so the answer is 2
//
//
// Для "x" определите, сколько положительных целых чисел, меньших или равных "x", являются нечётными,
// но не простыми. Предположим, что "x" — это целое число от 1 до 10000.
//
// Пример: в числе 5 есть три нечётных числа (1, 3, 5), и только число 1 не является простым,
// поэтому ответ — 1
//
// Пример: в числе 10 пять нечётных чисел (1, 3, 5, 7, 9), и только 1 и 9 не являются простыми
// числами, поэтому ответ — 2





function oddNotPrime(n){
    let arr=[];
    while(n>0){
        arr.unshift(n);
        n--;
    }

    let array = arr.filter(item =>item%2 === 1);

    let count = 0;
    array.forEach(item => {
        if (item === 1) {
            count += 1;
        } else if (!isPrime(item)) {
            count += 1;
        }
    });

    return count;
}

// Функция проверки простоты числа
function isPrime(n) {
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;

}

console.log(oddNotPrime(1411));