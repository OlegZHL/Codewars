// Is every value in the array an array?
//
// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
//
// Examples:
//
//     [[1],[2]] => true
//     ['1','2'] => false
//     [{1:1},{2:2}] => false

// Является ли каждое значение в массиве массивом?
//
// Это должно тестировать только второе измерение массива. Значения вложенных массивов не обязательно должны быть массивами.
//
// Примеры:
//
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false



function arrCheck(arr){
    let result = 0;

    arr.forEach((item)=>{
       if (Array.isArray(item)){
           result+=0;
       } else {
           result+=1;
       }
    });

    return (result === 0);

}

console.log(arrCheck([[1],[2],2]));