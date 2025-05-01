// Take an array and remove every second element from the array. Always keep the first
// element and start removing with the next element.
//
//     Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// None of the arrays will be empty, so you don't have to worry about that!

// Возьмите массив и удалите из него каждый второй элемент. Всегда сохраняйте первый элемент
// и начинайте удаление со следующего элемента.
//
//     Пример:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// Ни один из массивов не будет пустым, так что вам не о чем беспокоиться!

function removeEveryOther(arr){

     return arr.filter((_, index) =>  index % 2 === 0);

}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));