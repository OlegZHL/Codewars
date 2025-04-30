// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//Напишите функцию RemoveExclamationMarks, которая удаляет все восклицательные знаки из заданной строки.

function removeExclamationMarks(s) {
     return s.split('').filter(item => item !== "!").join("")
}

console.log(removeExclamationMarks("Hello World!"));