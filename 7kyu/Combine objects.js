// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are
// added together.

// An example:

// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// The combine function should be a good citizen, so should not mutate the input objects.

// Ваша задача — написать функцию, которая принимает два или более объектов и возвращает новый объект, объединяющий все входные объекты.

// Все свойства входного объекта будут иметь только числовые значения. Объекты объединяются таким образом,
// чтобы значения соответствующих ключей суммировались.

// Пример:

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
// combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
// Функция объединения должна быть корректной и не должна изменять входные объекты.

function combine() {
  let obj = {};
  for (let i = 0; i < arguments.length; i++) {
    for (let key in arguments[i]) {
      if (obj[key]) {
        obj[key] = obj[key] + arguments[i][key];
      } else {
        obj[key] = arguments[i][key];
      }
    }
  }
  return obj;
}

console.log(combine(objA, objB));
