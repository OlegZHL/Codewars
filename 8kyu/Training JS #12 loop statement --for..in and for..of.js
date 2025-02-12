// Task
// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. 
// If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5,
//  then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.




// Задача
// Функция giveMeFive принимает 1 параметр, obj который является объектом.

// Создайте массив (который вы в конечном итоге вернёте). Затем пройдитесь по obj, проверяя каждый ключ и значение. 
// Если длина ключа равна 5, добавьте ключ в свой массив. Отдельно, если длина значения равна 5, добавьте значение в свой массив.

// В конце верните ваш массив.

// В вашем коде следует использовать for..in , иначе ваше решение может не пройти этот тест.



function giveMeFive(obj){
    //coding here
    let arr = [];
    
    for( let key in obj){
        if(key.length === 5){
            arr.push(key);
        }
        if(obj[key].length === 5){
                arr.push(obj[key]);
            }
            
        } 
    return arr;
  }


console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));