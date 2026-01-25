// Для двух массивов строк верните количество вхождений каждой строки
// из второго массива в первый массив.
//
//     Пример
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']
// Сколько раз элементы array2 встречаются в array1?
//
// 'abc'встречается дважды в первом массиве (2)
// 'cde'встречается только один раз (1)
// 'uap'не встречается в первом массиве (0)
// Поэтому solve(array1, array2) = [2, 1, 0]

function solve(a,b){
    let arr = []
    for(let i=0; i<b.length; i++){
        let count = 0;
        for(let j=0; j<a.length; j++){
            if(b[i] === a[j]){
                count++;
            }
        }
        arr.push(count);
    }
    return arr;
}

console.log(solve(['abc', 'abc', 'xyz', 'cde', 'uvw'],['abc', 'cde', 'uap']));