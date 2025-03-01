// Given: a sequence of different type of values (number, string, boolean). You should return an object with a separate properties
// for each of types presented in input. Each property should contain an array of corresponding values.

// keep order of values like in input array
// if type is not presented in input, no corresponding property are expected
// So, for this input:

// ['a', 1, 2, false, 'b']
// expected output is:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

// Дано: последовательность значений разных типов (число, строка, логическое значение). Необходимо вернуть объект с отдельными
// свойствами для каждого из представленных во входных данных типов. Каждое свойство должно содержать массив соответствующих значений.

// сохраняйте порядок значений, как во входном массиве
// если тип не представлен во входных данных, соответствующее свойство не ожидается
// Итак, для этого ввода:

// ['a', 1, 2, false, 'b']
// ожидаемый результат составляет:

// {
//   number: [1, 2],
//   string: ['a', 'b'],
//   boolean: [false]
// }

function separateTypes(input) {
  let valueObj = {};

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === "string") {
      if (valueObj.hasOwnProperty("string")) {
        valueObj.string.push(input[i]);
      } else {
        valueObj.string = [input[i]];
      }
    } else if (typeof input[i] === "number") {
      if (valueObj.hasOwnProperty("number")) {
        valueObj.number.push(input[i]);
      } else {
        valueObj.number = [input[i]];
      }
    } else if (typeof input[i] === "boolean") {
      if (valueObj.hasOwnProperty("boolean")) {
        valueObj.boolean.push(input[i]);
      } else {
        valueObj.boolean = [input[i]];
      }
    }
  }
  return valueObj;
}

console.log(separateTypes(["a", "b", 1, 2, false, true]));

