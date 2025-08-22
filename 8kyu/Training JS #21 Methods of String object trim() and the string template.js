// Кодирование в функции fiveLine, функция принимает 1 параметр: s. s — это строка.
// Пожалуйста, верните строку из 5 строк (символ новой строки — \n).
// В первой строке одно s; во второй строке два s; и так далее.. В пятой строке пять s;
//
// Примечание 1. По обеим сторонам параметра s могут быть пробелы.
// Пожалуйста, удалите их перед использованием s.
// Примечание 2. Использование строкового шаблона может упростить вашу задачу.
//     Пример:
//
// fiveLine("  xy ")
// should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
// xy
// xyxy
// xyxyxy
// xyxyxyxy
// xyxyxyxyxy  <---The effect when you console.log it


function fiveLine(s){
    let str = s.trim();
    return `${str}\n${str+str}\n${str+str+str}\n${str+str+str+str}\n${str+str+str+str+str}`;
}

console.log(fiveLine(' Hello '));