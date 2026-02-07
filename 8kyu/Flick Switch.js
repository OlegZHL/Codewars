// Создайте функцию, которая всегда возвращает True/true для каждого элемента в заданном списке.
// Однако если элемент представляет собой слово 'flick', функция должна возвращать противоположное логическое значение.
//
// Примеры
//     ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
//
//     ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
//
//     ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
// Примечания
//     Слово «flick» всегда будет писаться строчными буквами.
//     Список может содержать несколько элементов flick.
//     Измените логическое значение того же элемента, что и сам flick.

function flickSwitch(arr){
   let flag = true;
   let array = [];
   for(let i = 0; i < arr.length; i++){
       if(arr[i] === 'flick'){
           flag = !flag;
       }
       array.push(flag);
   }
   return array;
}

console.log(flickSwitch( ['bicycle','jarmony','flick','sheep','flick']));
