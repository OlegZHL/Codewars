// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

// О нет!
// Какой-то очень забавный веб-разработчик отправил вам последовательность чисел из своего ответа API в виде последовательности строк!

// Вам нужно привести весь массив к правильному типу.

// Создайте функцию, которая принимает в качестве параметра последовательность чисел, представленных в виде строк, и выводит
// последовательность чисел.

// т.е.:["1", "2", "3"] к [1, 2, 3]

// Обратите внимание, что вы также можете получать значения с плавающей запятой.

function toNumberArray(stringarray) {
  let numberArray = [];
  for (let i = 0; i < stringarray.length; i++) {
    numberArray.push(Number(stringarray[i]));
  }
  return numberArray;
}

console.log(toNumberArray(["1", "2", "3"]));
