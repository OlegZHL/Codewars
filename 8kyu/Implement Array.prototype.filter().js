// Мы хотим реализовать Array.prototype.filter() функцию, аналогичную
// существующей Array.prototype.filter(). Другая похожая функция есть
// _.filter() в underscore.js и lodash.js.
//
// Использовать её будет довольно просто, например:
//
// [1, 2, 3, 4, 5].filter(num => num > 3) == [4, 5]
// Конечно, существующая Array.prototype.filter() функция была объявлена
// как неопределённая для целей этой ката.

Array.prototype.filter = function (func) {
    const result = [];

    for (let i = 0; i < this.length; i++) {

        if (i in this) {
            if (func(this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }

    return result;
}

console.log([1,2,3,4,5].filter(x => x > 2));
