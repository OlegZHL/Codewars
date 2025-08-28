// Задача
// Создайте метод, который будет определять, вся ли строка написана заглавными буквами.
//
// Примеры (ввод —> вывод)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// В этой задаче строка считается написанной ЗАГЛАВНЫМИ буквами,
// если в ней нет ни одной строчной буквы.
// Таким образом, любая строка, не содержащая букв, по определению считается написанной ЗАГЛАВНЫМИ буквами.

String.prototype.isUpperCase = function() {
 return this.toString() === this.toUpperCase();
};

console.log("Hello".isUpperCase());
console.log("HELLO".isUpperCase());