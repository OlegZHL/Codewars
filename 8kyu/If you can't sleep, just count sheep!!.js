// Если не можешь уснуть, просто считай овец!!!
//
//     Задача:
// Для неотрицательного целого числа 3, например, верните строку с бормотанием: "1 sheep...2 sheep...3 sheep...".
// Ввод всегда будет корректным, то есть без отрицательных целых чисел.


let countSheep = function (num){
    let string = "";
    for(let i = 1; i <= num; i++){
        string+= `${i} sheep...`;
    }
    return string;
}

console.log(countSheep(2));
