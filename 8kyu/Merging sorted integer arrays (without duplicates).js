// Напишите функцию, которая объединяет два отсортированных массива в один.
// Массивы содержат только целые числа.
// Кроме того, конечный результат должен быть отсортирован и не должен содержать дубликатов.

function mergeArrays(a, b){
    return a.concat(b).sort((a, b) => a - b).
    filter((item, index, array) => array.indexOf(item) === index);
}

console.log(mergeArrays([2, 4, 8], [2, 4, 6]));