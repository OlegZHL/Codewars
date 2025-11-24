// В этом задании мы создадим функцию для проверки того, является ли период запоздалым.
// Наша функция будет принимать три параметра:
// last — объект Date с датой последнего периода
// today — объект Date с датой проверки
// cycleLength — целое число, обозначающее продолжительность цикла в днях
//
// Верните true, если количество дней, прошедших с прошлого раза до сегодняшнего, больше,
// чем cycleLength. В противном случае верните false.

function periodIsLate(last, today, cycleLength) {
    const periodDay = 1000*60*60*24;
    const day = today - last;
    const mlDay = day/periodDay
    return mlDay > cycleLength;
}

console.log(periodIsLate(new Date(2023, 0, 1), new Date(2023, 0, 31),28));