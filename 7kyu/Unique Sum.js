// Вам дан список целых чисел. Ваша задача — вычислить сумму этих чисел.
// Однако если одно и то же целое число встречается в списке несколько раз,
// вы можете учесть его только один раз.
//
//     Например:
//
// [ 1, 2, 3] ==> 6
//
// [ 1, 3, 8, 1, 8] ==> 12
//
// [ -1, -1, 5, 2, -7] ==> -1
//
// [] ==> null

function uniqueSum(lst){
    if(lst.length === 0){
        return null;
    } else {
    let arr = lst.filter((item,index)=>{
       return lst.indexOf(item) === index;
    });
    let sum = 0;
    arr.forEach(item => sum+=item);
    return sum;
    }
}

console.log(uniqueSum([]));