// Вам даны два внутренних угла (в градусах) треугольника.
//
// Напишите функцию для вычисления третьего числа.
//
// Примечание: будут проверяться только положительные целые числа.

function otherAngle(a, b) {
    return 180 - (a + b);
}

console.log(otherAngle(30, 60));