// Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

// For example:

// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"
// What you need to think about is how to judge it correctly and effectively and don't forget isNaN().

// Задача
// Кодирование в функции whatNumberIsIt. функция принимает 1 параметр:n. это число.

// Чтобы определить число n. Если n является одной из пяти вышеперечисленных констант, верните одну из следующих строк:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Должны возвращаться другие значения "Input number is xxx". xxx означает это число.

// Например:

// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"
// Вам нужно подумать о том, как правильно и эффективно это сделать, и не забывайте о функции isNaN().

function whatNumberIsIt(n) {
  if (n === 1.7976931348623157e308) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === 5e-324) {
    return "Input number is Number.MIN_VALUE";
  } else if (isNaN(n)) {
    return "Input number is Number.NaN";
  } else if (n === Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n === Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else {
    return ("Input number is " + n);
  }
}

console.log(whatNumberIsIt(100));