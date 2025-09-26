// Ваша задача — суммировать разности между последовательными парами в массиве в порядке убывания.
//
//     Пример
//     [2, 1, 10]  -->  9
// В порядке убывания: [10, 2, 1]
//
// Сумма: (10 - 2) + (2 - 1) = 8 + 1 = 9
//
// Если массив пуст или содержит только один элемент,
// результатом должно быть 0 (Nothing в Haskell, None в Rust).

function sumOfDifferences(arr){
    let sum = 0;
    if(arr.length === 0 || arr.length === 1){
        return sum;
    } else {
        arr.sort((a, b) => b - a);
        for (let i = 0; i < arr.length - 1; i++){
            sum += (arr[i] - arr[i + 1]);
        }
    }
    return sum;
}

console.log(sumOfDifferences([2,1,10]));