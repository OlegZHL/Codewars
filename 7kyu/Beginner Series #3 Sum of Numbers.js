// Даны два целых числа a и b, которые могут быть положительными или отрицательными.
// Найдите сумму всех целых чисел между ними, включая их, и верните результат.
// Если два числа равны, верните a или b.
//
// Примечание: a и b не являются упорядоченными!
//
// Примеры (a, b) —> результат (объяснение)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

function getSum(a, b){
    let count = 0;
    if(a === b){
        return a;
    } else if(a < b){
        while(a <= b){
            count+=a;
            a++;
        }
        return count;
    } else if(a > b){
        while(b <= a){
            count+=b;
            b++;
        }
        return count;
    }
}

console.log(getSum(-2, 5));