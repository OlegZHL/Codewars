// You take your son to the forest to see the monkeys. You know that there are a
// certain number there (n), but your son is too young to just appreciate the full
// number, he has to start counting them from 1.
//
// As a good parent, you will sit and count with him. Given the number (n), populate
// an array with all numbers up to and including that number, but excluding zero.
//
//     For example(Input --> Output):
//
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 --> [1]
//
// Вы идёте с сыном в лес, чтобы посмотреть на обезьян. Вы знаете, что там их определённое
// количество (n), но ваш сын слишком мал, чтобы просто оценить их количество, ему нужно
// начать считать их с 1.
//
// Как хороший родитель, вы будете сидеть и считать вместе с ним. Учитывая число (n), заполните
// массив всеми числами до и включая это число, но исключая ноль.
//
// Например(Ввод -> Вывод):
//
// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1 --> [1]

function monkeyCount(n) {
let arr=[];
while(n>0){
    arr.unshift(n);
    n--;
}
return arr;
}

console.log(monkeyCount(10));