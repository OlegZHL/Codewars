// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"
// Good luck!

// Вам нужно создать простой калькулятор, который будет вычислять сумму, разность, произведение или частное двух чисел.

// Ваша функция будет принимать три аргумента:
// Первый и второй аргументы должны быть числами.
// Третий аргумент должен представлять собой знак, указывающий на операцию, которую нужно выполнить с этими двумя числами.

// если переменные не являются числами или знак не входит в приведённый выше список, должно быть возвращено сообщение «неизвестное значение».

// Пример:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"
// Удачи вам!

function calculator(a, b, sign) {
  if (typeof a === "number" && typeof b === "number") {
    if (sign == "+") {
      return a + b;
    } else if (sign == "-") {
      return a - b;
    } else if (sign == "*") {
      return a * b;
    } else if (sign == "/") {
      return a / b;
    } else {
      return "unknown value";
    }
  } else {
    return "unknown value";
  }
}

console.log(calculator(1, 2, "/"));
