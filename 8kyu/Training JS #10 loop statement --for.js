
// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. 
// If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

// If you forgot how to push an element to an array, please refer to lesson 4.


// Задача
// Функция pickIt принимает 1 параметр, arr который представляет собой массив чисел. Нам нужно перебрать arr с помощью for цикла. 
// Если элемент является нечётным числом, добавьте его в odd массив, а если он является чётным числом, добавьте его в even массив.

// Я определил два массива odd и even в функции, а также написал оператор return. Ваша работа заключается в написании for цикла.

// Если вы забыли, как добавить элемент в массив, обратитесь к уроку 4.

let arr = [8,1,5,4,6,1,1];

function pickIt(arr){
    let odd = [], even = [];

        for( let i = 0; i < arr.length; i++){
            (arr[i] % 2 !== 0)? (odd.push(arr[i])): (even.push(arr[i]));
        }
    
    return [odd,even];
 }

console.log(pickIt([8,1,5,4,6,1,1]));