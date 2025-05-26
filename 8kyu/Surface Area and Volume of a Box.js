// Напишите функцию, которая возвращает общую площадь поверхности и объём коробки.
//
// Входными данными будут три положительных ненулевых целых числа: width, height и depth.
//
//Результат будет зависеть от языка, поэтому, пожалуйста, ознакомьтесь с примерами тестов
// для соответствующего типа данных, (list, tuple, struct, query, и так далее).


function getSize(width, height, depth) {
    let values = [];
    values.push(2 * (width * height + height * depth + depth * width));
    values.push(width * height * depth);
    return values;
}

console.log(getSize(4,2,6));