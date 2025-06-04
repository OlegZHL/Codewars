// Переключатель/корпус — исправление ошибки
// О нет! Функция Тимми evalObject не работает.
// Он использует Switch/Cases для оценки заданных свойств объекта.
// Можете ли вы исправить функцию Тимми?


function evalObject(value){
    let result = 0;
    switch(value.operation){
        case '+': result = value.a + value.b;
            break;
        case'-': result = value.a - value.b;
            break;
        case'/': result = value.a / value.b;
            break;
        case'*': result = value.a * value.b;
            break;
        case'%': result = value.a % value.b;
            break;
        case'^': result = Math.pow(value.a, value.b);
            break;
    }
    return result;
}

console.log(evalObject({a:1,b:1,operation:'+'}));