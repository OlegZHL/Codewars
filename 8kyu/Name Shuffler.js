// Напишите функцию, которая возвращает строку, в которой имя и фамилия меняются местами.
//
// Пример (ввод —> вывод)
// "john McClane" --> "McClane john"

function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
}

console.log(nameShuffler('john McClane'));