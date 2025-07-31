// Даны две строки, состоящие из + и -.
// Верните новую строку, которая показывает,
// как эти две строки взаимодействуют следующим образом:
//
//     Когда положительные заряды взаимодействуют, они остаются положительными.
//     Когда отрицательные заряды взаимодействуют, они остаются отрицательными.
//     Но когда отрицательные и положительные заряды взаимодействуют,
//     они становятся нейтральными и отображаются в виде числа 0.
//
// Отработанный Пример
// ("+-+", "+--") ➞ "+-0"
// # Compare the first characters of each string, then the next in turn.
// # "+" against a "+" returns another "+".
// # "-" against a "-" returns another "-".
// # "+" against a "-" returns "0".
// # Return the string of characters.
// Примеры
// ("--++--", "++--++") ➞ "000000"
//
// ("-+-+-+", "-+-+-+") ➞ "-+-+-+"
//
// ("-++-", "-+-+") ➞ "-+00"


function neutralise(s1, s2) {
    let result = [];
    let str1 = s1.split('');
    let str2 = s2.split('');
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] === str2[i] && str1[i] === '+') {
            result.push(str1[i]);
        } else if (str1[i] === str2[i] && str1[i] === '-') {
            result.push(str1[i]);
        } else if (str1[i] !== str2[i]) {
            result.push("0");
        }
    }
return result.join('');
}

console.log(neutralise("-++-", "-+-+"));