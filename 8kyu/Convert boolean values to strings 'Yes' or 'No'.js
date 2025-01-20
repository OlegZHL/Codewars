//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
//Дополните метод, который принимает логическое значение и возвращает строку "Yes" для true или строку "No" для false.

// function boolToWord( bool ){
//     //...
//   }

//Решение №1.

// let bool = false;

// function boolToWord(bool) {
//   if (bool) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }

// boolToWord(bool);

// console.log(boolToWord(bool));

// Решение №2.

let bool = true;

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

boolToWord(bool);

console.log(boolToWord(bool));
