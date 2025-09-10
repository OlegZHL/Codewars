// Лексический этот
// Дополните объект Person, реализовав функцию FillFriends для заполнения массива
// _friends объекта person.
// Выходной сигнал
// Верните объект person с заполненными полями Name, Friends и функцией FillFriends, которая заполнит поле Friends.
// Ссылка: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

let Person = function(){
    let person = {
        _name: "Leroy",
        _friends: [],
        fillFriends: (f) => {
            person._friends = f;
        }
    }
    return person;
}

let p = Person();
p.fillFriends(["Sam", "John"]);
console.log(p._friends);