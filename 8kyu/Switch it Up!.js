// Если указано число от 0-9, верните его в виде слов.
// Обратите внимание, что введенное значение гарантированно находится в диапазоне от 0-9.
//
// Входные данные: 1
// Вывод: "One".
//
// Если ваш язык программирования поддерживает это, попробуйте использовать оператор switch.

function switchItUp(number){
switch(number){
    case 0:
        return "Zero";
    case 1:
        return "One";
    case 2:
         return "Two";
    case 3:
        return "Three";
    case 4:
        return "Four";
    case 5:
        return "Five";
    case 6:
        return "Six";
    case 7:
        return "Seven";
    case 8:
        return "Eight";
    case 9:
        return "Nine";
    }
}


console.log(switchItUp(2));