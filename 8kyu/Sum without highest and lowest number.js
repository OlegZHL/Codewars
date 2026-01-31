// Сложите все числа в заданном массиве (списке), кроме самого большого и самого маленького элемента
// (по значению, а не по индексу!).
//
// Самый высокий или самый низкий элемент соответственно — это один элемент на каждом краю,
// даже если таких элементов с одинаковым значением несколько.
//
// Обратите внимание на проверку входных данных.
//
//     Пример
// { 6, 2, 1, 8, 10 } => 16
// Проверка входных данных
// Если вместо массива указано пустое значение ( null, None, Nothing, nil и т. д.)
// или если указанный массив является пустым списком или списком, содержащим только 1 элемент, верните 0.

function sumArray(array) {
    if(array == null || array.length === 1 || array.length === 2) {
        return 0;
    } else {
    let max = array[0];
    let min = array[0];

    for(let i = 0; i < array.length; i++) {
        if(array[i] > max){
            max = array[i];
        }
    }

    let indexMax = array.indexOf(max);
    array.splice(indexMax, 1);

    for(let i = 0; i < array.length; i++) {
        if(array[i] < min){
            min = array[i];
        }
    }

    let indexMin = array.indexOf(min);
    array.splice(indexMin, 1);

    let sum = 0;
    for(let i = 0; i < array.length; i++) {
            sum += array[i];
        }
      return sum;
    }
}

console.log(sumArray([ -6, 20, -1, 10, -12 ]));

