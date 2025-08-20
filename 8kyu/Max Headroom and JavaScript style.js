// Разве две функции getMax1 и getMax2 не должны быть эквивалентными и возвращать
// одно и то же значение? Можете ли вы найти проблему и исправить её?
// Можете ли вы узнать что-то о стиле JavaScript из этого задания?

function getMax1(){
    let max = {name: 'Max Headroom'};
    return max;
}

function getMax2(){
    return {name: 'Max Headroom'};
}

console.log(getMax1());
console.log(getMax2());