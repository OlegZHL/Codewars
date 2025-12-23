// Ваша задача — просто подсчитать общее количество строчных букв в строке.
//     Примеры
// "abc" ===> 3
//
// "abcABC123" ===> 3
//
// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3
//
// "" ===> 0;
//
// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0
//
// "abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str){
    return (str.split("").filter(i => /[a-zа-яё]/.test(i))).length;
}

console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|:;?/>.<,~"));