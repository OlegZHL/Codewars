// Terminal Game — создание прототипа героя
// В этом первом ката из серии вам нужно определить прототип героя для использования
// в терминальной игре. Герой должен обладать следующими характеристиками:
//
// attribute	value
// name	user argument or 'Hero'
// position	'00'
// health	100
// damage	5
// experience	0

class Hero {
    constructor(name = 'Hero') {
        this.name = name;
        this.position = '00';
        this.health = 100;
        this.damage = 5;
        this.experience = 0;
    }
}

const a1 = new Hero('Oleg');
console.log(a1);





