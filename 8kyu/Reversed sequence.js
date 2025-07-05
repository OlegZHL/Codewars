// Создайте функцию, которая возвращает массив целых чисел от n до 1, где n>0.
//
// Пример: n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = [];
    while (n > 0) {
        arr.push(n);
        n--;
    }
    return arr;
}

console.log(reverseSeq(5));