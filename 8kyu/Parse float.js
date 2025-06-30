// Напишите функцию parseF, которая принимает входные данные и
// возвращает число или null, если преобразование невозможно.
// Входные данные могут быть разных типов, имейте это в виду.


function parseF(s) {
    let num = parseFloat(s);
    return isNaN(num)?null:num;
}

console.log(parseF("2.1"));