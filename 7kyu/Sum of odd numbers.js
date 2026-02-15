// Рассмотрим треугольник из последовательных нечетных чисел:
//
//                     1
//                  3     5
//               7     9    11
//            13    15    17    19
//         21    23    25    27    29
// ...
// Вычислите сумму чисел в n-й строке этого треугольника (начиная с индекса 1), например: (Входные данные --> Выходные данные)
//
// 1 -->  1
// 2 --> 3 + 5 = 8

function rowSumOddNumbers(n) {
    let sum = 0;
    let arr = [];
    let i = 1; // номер строки.
    let numberStr = 1; // числа
    while (i <= n){
        let k = i;
                if(k === 1){
                    arr.push(numberStr);
                    k-=1;
                }
                while (k >= 1) {
                    numberStr +=2;
                    arr.push(numberStr);
                    k-=1;
                }
        i++;
    }

    while(n > 0){
        sum += arr[arr.length-n];
        n--;
    }
    return sum;
}

console.log(rowSumOddNumbers(42));