// Создайте функцию, которая принимает на вход 2 целых числа в виде строки
// и выводит сумму (также в виде строки):
//
// Пример: (Ввод1, Ввод2 --> Вывод)
//
// "4", "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"




function sumStr(a,b) {
    return String(Number(a) + Number(b));
}

console.log(sumStr('1','2'));