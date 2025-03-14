// Task
// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.

// Please return the gap between the first position of c and the last position of c.

// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.

// for example:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

// Задача
// Кодирование в функции firstToLast, функция принимает 2 параметра:str и c. str это строка. c это символ.

// Пожалуйста, верните пробел между первой позицией c и последней позицией c.

// Если в c есть много str, должно быть возвращено положительное целое число; если есть только один c в str, должно быть возвращено 0; если в c нет str, должно быть возвращено -1. При извлечении не следует игнорировать регистр.

// например:

// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

function firstToLast(str, c) {
  let str1 = str.indexOf(c);
  let str2 = str.lastIndexOf(c);

  if (str1 === -1) {
    return -1;
  } else {
    return str2 - str1;
  }
}

console.log(firstToLast("ababc", "a"));
