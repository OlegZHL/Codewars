// Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"


// Описание:
// Вам будет дана непустая строка. Ваша задача — вернуть средний символ (символы) строки.

// Если длина строки нечётная, верните средний символ.
// Если длина строки чётная, верните два средних символа.


let s = "test";

function getMiddle(s){

let averageSymbol = (s.length % 2 === 0) ?  s[(s.length / 2) - 1] + s[(s.length / 2)] : s[Math.floor(s.length/2)];
    return averageSymbol;
}

console.log(getMiddle(s));