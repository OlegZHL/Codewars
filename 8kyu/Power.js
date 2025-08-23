// Цель состоит в том, чтобы создать функцию с двумя входными параметрами number и power,
// которая «возводит» number в степень power (т. е. умножает number на себя power раз).
//
// Примеры
// numberToPower(3, 2)  // -> 9 ( = 3 * 3 )
// numberToPower(2, 3)  // -> 8 ( = 2 * 2 * 2 )
// numberToPower(10, 6) // -> 1000000
// Примечание: Math.pow и некоторые другие Math функции, такие как eval() и **, отключены.


function numberToPower(number, power){
    let i = 1;
    let count = 1;
    while(i <= power){
        count*=number;
        i++;
    }
    return count;
}

console.log(numberToPower(7, 3));