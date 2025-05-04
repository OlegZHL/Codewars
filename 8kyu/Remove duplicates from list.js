// Define a function that removes duplicates from an array of non negative numbers
// and returns it as a result.
//
//     The order of the sequence has to stay the same.
//
//     Examples:
//
// Input -> Output
//     [1, 1, 2] -> [1, 2]
//     [1, 2, 1, 1, 3, 2] -> [1, 2, 3]


// Определите функцию, которая удаляет дубликаты из массива неотрицательных чисел
// и возвращает его в качестве результата.
//
//     Порядок следования должен оставаться прежним.
//
//     Примеры:
//
// Input -> Output
//     [1, 1, 2] -> [1, 2]
//     [1, 2, 1, 1, 3, 2] -> [1, 2, 3]



function distinct(a) {
    return a.filter((item, index, arr) => arr.indexOf(item) === index);
}
console.log(distinct([1, 2, 1, 1, 3, 2]));