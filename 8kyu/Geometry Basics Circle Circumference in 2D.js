// Эта серия ката познакомит вас с основами компьютерной геометрии.
//
// Point объекты имеют атрибуты x, y. Circle объекты имеют center,
// который является Point, и radius, который является числом.
//
// Напишите функцию для вычисления длины окружности.Circle.
//
// Округляет ответы до 6 знаков после запятой.


function circleCircumference(circle) {
    return Number((2 * Math.PI * circle.radius).toFixed(6));

}


const circle = {
    center: { x: 10, y: 10 },
    radius: 30
};

console.log(circleCircumference(circle));
