// Дан непустой массив целых чисел.
// Вернуть результат перемножения значений по порядку. Пример:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    let num = 1;
    x.forEach(item => num *= item);
    return num;
}

console.log(grow([2, 2, 2, 2, 2, 2]));