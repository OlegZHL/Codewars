// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
// You're given one parameter, the original string. You don't have to worry about strings with less than two characters.

// Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний символы строки. Вам даётся один параметр — исходная строка. 
// Вам не нужно заботиться о строках, в которых меньше двух символов.



function removeChar(str){
    return str.split('').slice(1,str.length-1).join("");
};

console.log(removeChar('country'));