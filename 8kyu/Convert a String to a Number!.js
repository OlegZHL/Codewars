// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7



// Нам нужна функция, которая может преобразовать строку в число. Какие способы достижения этой цели вы знаете?

// Примечание: не волнуйтесь, все входные данные будут строками, и каждая строка является абсолютно корректным представлением целого числа.

// Примеры
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7


const stringToNumber = function(str){
    return Number(str);
}

console.log(stringToNumber("123"));