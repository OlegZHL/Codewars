// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number 
// of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined.



// Рассмотрим массив/список овец, в котором некоторые овцы могут отсутствовать. Нам нужна функция, 
// которая подсчитывает количество овец в массиве (истина означает наличие).

// Например,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// Правильным ответом было бы 17.

// Подсказка: не забудьте проверить наличие недопустимых значений, таких как null/undefined.

let sheep = [true,  true,  true,  false,
             true,  true,  true,  true ,
             true,  false, true,  false,
             true,  false, false, true ,
             true,  true,  true,  true ,
             false, false, true,  true];

function countSheeps(sheep){
    let count = 0;
    for(let i = 0; i < sheep.length; i++){
        if(sheep[i] === true){
            count++;
        } else if (sheep[i] !== true){
            count;
        }
    }
    return count;
}

console.log(countSheeps(sheep));