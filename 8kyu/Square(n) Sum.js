// Complete the square sum function so that it squares each number passed
// into it and then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9.
//
// Дополните функцию вычисления суммы квадратов так, чтобы она возводила в квадрат каждое
// переданное ей число, а затем суммировала результаты.
//
//     Например, для [1, 2, 2] он должен вернуть 9.

function squareSum(numbers){
    let sum = 0;
    numbers.map((number)=> sum+=(number*number));
    return sum;
}

console.log(squareSum([1,2,3,4,5]));