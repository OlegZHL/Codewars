// Реализуйте функцию generateRange, которая принимает три аргумента (start, stop, step)
// и возвращает диапазон целых чисел от start до stop (включительно) с шагом step.
//
// Примеры
// (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// (-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
// (1, 15, 20) -> [1]
// Примечание
// старт < остановка
// шаг > 0

function generateRange(min, max, step){
    let result = [];
    result.push(min);
    while(result[result.length-1]+step <= max){
       result.push(result[result.length-1]+step);
    }
    return result;
}

console.log(generateRange(2, 10, 2));