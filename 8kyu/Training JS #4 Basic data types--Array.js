// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside 
// the function bodies.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.


// Я написал пять функций. Каждая функция получает параметр, arr который является массивом. Выполните функции, используя arr внутри тела функции.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// Когда вы закончите работу, нажмите «Запустить тесты», чтобы проверить, правильно ли работает ваш код.

// В конце нажмите «Отправить», чтобы отправить свой код и пройти это задание.


let arr=[1,2,3];

function getLength(arr){
    //return length of arr
    return arr.length;
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0];
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length - 1];
  }
  function pushElement(arr){
    var el=1;
    //push el to arr
    arr.push(el);
    return arr;
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop();
    return arr;
  }

