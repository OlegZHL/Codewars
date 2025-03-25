// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned
// as an array?

// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space.

// Что, если нам нужно добавить длину слов, разделённых пробелами, в конец того же слова и вернуть их в виде массива?

// Пример (Ввод -> Вывод)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Ваша задача — написать функцию, которая принимает строку и возвращает массив/список с длиной каждого слова, добавленной к каждому
// элементу.

// Примечание: Строка будет содержать хотя бы один элемент; слова всегда будут разделены пробелом.

function addLength(str) {
  let array = str.split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] += " " + array[i].length;
  }
  return array;
}
console.log(addLength("you will win"));
