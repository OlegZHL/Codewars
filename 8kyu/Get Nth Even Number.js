// Верните N-е чётное число
//
// Пример(Входные данные --> Выходные данные)
//
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// Входное значение не будет равно 0.

function nthEven(n){
    return (n - 1) * 2;
}

console.log(nthEven(3));


