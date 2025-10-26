// Создайте функцию под названием _if, которая принимает 3 аргумента:
// значение bool и 2 функции (которые не принимают никаких параметров): func1 и func2
//
// Если bool истинно, то следует вызвать func1, в противном случае вызовите func2.
//
//     Пример:
// _if(true, function(){console.log("True")}, function(){console.log("false")})
// Logs 'True' to the console.

function _if(bool, func1, func2){
    return bool?func1():func2();
}

const func1 = function(){console.log("True")};
const func2 = function(){console.log("false")};

console.log(_if(true, func1, func2));
