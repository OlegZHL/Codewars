// Создайте функцию, которая принимает список/массив и число n,
// а возвращает список/массив из первых n элементов списка/массива.
// Если вам нужна помощь, вот ссылка:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function take(arr, n) {
    return arr.slice(0,n)
}

console.log(take([1,2,3,4,5],3));