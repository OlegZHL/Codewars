// Учитывая массив чисел, проверьте, являются ли какие-либо из чисел кодами
// символов для гласных в нижнем регистре (a, e, i, o, u).
//
//Если это так, измените значение массива на строку с этой гласной.
//
//Верните результирующий массив.
//
//

function isVow(a) {
    a.forEach((item, index) => {
        if (item === 97) {
            a.splice(index, 1, "a");
        } else if (item === 101) {
            a.splice(index, 1, "e");
        } else if (item === 105) {
            a.splice(index, 1, "i");
        } else if (item === 111) {
            a.splice(index, 1, "o");
        } else if (item === 117) {
            a.splice(index, 1, "u");
        }
    });
    return a;
}

console.log(isVow([118, 117, 120, 121, 101, 98, 122, 97, 120, 106, 104, 105, 113, 114, 113, 120, 106]));