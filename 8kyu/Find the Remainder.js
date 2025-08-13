
// Задача:
// Напишите функцию, которая принимает два целых числа и возвращает остаток от деления большего числа на меньшее.
//
// При делении на ноль должно получиться NaN.
//
//     Примеры:
// n = 17
// m = 5
// result = 2 (remainder of `17 / 5`)
//
// n = 13
// m = 72
// result = 7 (remainder of `72 / 13`)
//
// n = 0
// m = -1
// result = 0 (remainder of `0 / -1`)
//
// n = 0
// m = 1
// result - division by zero (refer to the specifications on how to handle this in your language)

function remainder(n, m){
    if(n === 0 && m === 0){
        return NaN;
    } else if (m < n && m === 0){
        return n%m;
    } else if (n < m && n === 0){
        return m%n;
    } else if(n < 0 && m < 0 && m <= n){
        return n%m;
    } else if(n < 0 && m < 0 && n <= m){
        return m%n;
    } else if (n > m){
       return n%m;
    } else if (n < m) {
        return m%n;
    }
}

console.log(remainder(-10,-10));
