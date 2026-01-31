// Доработайте решение так, чтобы оно сортировало переданный массив чисел.
// Если функция получает пустой массив или значение null/nil, она должна вернуть пустой массив.
//
//     Например:
//
// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
    return (nums === null || nums.length === 0)?[]:nums.sort((a,b)=> a-b);
}

console.log(solution([1,2,3,10,5]));