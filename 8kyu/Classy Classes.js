// «Базовые классы». Это ката в основном посвящено новому обновлению JS ES6, в котором представлены классы.
// Задача
// Ваша задача — дополнить этот класс. Класс Person создан.
// Вам нужно заполнить метод конструктора, чтобы он принимал имя в виде строки и возраст в виде числа,
// а также дополнить свойство get Info и метод getInfo/Info, которые должны возвращать johns age is 34.

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    get info(){
        return this.getInfo();
    }
    getInfo() {
        return `${this.name}s age is ${this.age}`;
    }
}

let john = new Person("john",34);

console.log(john.info);