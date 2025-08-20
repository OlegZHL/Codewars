// В JavaScript есть особый случай, когда строгое сравнение одной и той же переменной возвращает false!
// Попробуйте выяснить, что нужно сделать, чтобы получить такой результат!
//
// var x = something;
// x === x // returns false!
// Напишите функцию, которая будет возвращать значение, для которого строгое сравнение даст false!

function findStrangeValue(){
    return NaN;
}

let x = findStrangeValue();
console.log(x === x);