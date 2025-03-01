// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old".
// The first character in the string is always a number.

// Вы спрашиваете маленькую девочку: «Сколько тебе лет?» Она всегда отвечает: «x лет», где x — случайное число от 0 до 9.

// Напишите программу, которая возвращает возраст девочки (от 0 до 9) в виде целого числа.

// Предположим, что строка тестового ввода всегда является допустимой строкой. Например, тестовым вводом может быть "1 год" или "5 лет".
// Первый символ в строке всегда является числом.

function getAge(inputString) {
  let NumberAge = +inputString.match(/\d+/);
  if (NumberAge >= 0 && NumberAge <= 9) {
    return NumberAge;
  }
}

console.log(getAge("5 years old"));
