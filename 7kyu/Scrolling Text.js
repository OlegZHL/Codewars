// Let's create some scrolling text!

// Your task is to complete the function which takes a string, and returns an array with all possible rotations of the given string, in uppercase.

// Example
// scrollingText("codewars") should return:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Good luck!

// Давайте создадим какой-нибудь прокручивающийся текст!

// Ваша задача — завершить функцию, которая принимает строку и возвращает массив со всеми возможными вариантами поворота заданной строки в верхнем регистре.

// Пример
// scrollingText("codewars") должен вернуться:

// [ "CODEWARS",
//   "ODEWARSC",
//   "DEWARSCO",
//   "EWARSCOD",
//   "WARSCODE",
//   "ARSCODEW"
//   "RSCODEWA",
//   "SCODEWAR" ]
// Удачи вам!

function scrollingText(text) {
    let arr = [];
    arr.push(text.toUpperCase());

    for (let i = 0; i < arr.length; i++) {
        let elem = (arr[i] + arr[i][0]).slice(1);
            if (elem === text.toUpperCase()) {
                break;
            }
    arr.push(elem);
    }
    return arr;
}

console.log(scrollingText("codewars"));
