// Эта серия ката познакомит вас с основами компьютерной геометрии.
//
// Point У объектов есть атрибуты x и y.
// Напишите функцию, вычисляющую расстояние между Point a и Point b.
//
// Входные координаты находятся в диапазоне −50 ⩽ x,y ⩽ 50.
// Тесты сравнивают ожидаемый результат и фактический ответ с допуском 1e-6.

function Point(x, y){
    this.x = x;
    this.y = y;
}

function distanceBetweenPoints(a, b){
    return Math.hypot(a.x - b.x, a.y - b.y);
}

console.log(distanceBetweenPoints(new Point(1,6), new Point(4,2)));