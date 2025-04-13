// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

// Напишите функцию, которая принимает неотрицательное целое число n и строку s в качестве параметров и возвращает строку из s , повторяющуюся ровно n раз.

// Примеры (ввод -> вывод)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"


function repeatStr (n, s) {
    let i ="";
    while(n !== 0){
        i+=s;
        n--;
    }
    return i;
}

console.log(repeatStr(5,"Hello"));