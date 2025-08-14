// Для заданной строки s напишите метод (функцию), который будет возвращать true,
// если строка является допустимым целым числом или числом с плавающей запятой, и false, если это не так.
//
// Допустимые примеры, должны возвращать true:
//
// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// должен возвращать false:
//
// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

function isDigit(s) {
  let trim = s.trim();
  return /^-?\d+(\.\d+)?$/.test(trim);
}

console.log(isDigit("zero"));