// Реализуйте функцию, которая отфильтровывает значения массива, удовлетворяющие заданному предикату.
//
// reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0)  =>  [1, 3, 5]


function reject(array, predicate) {
    return array.filter(item => !predicate(item));
}

console.log(reject([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0));