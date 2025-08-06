// Напишите функцию для разделения строки и преобразования её в массив слов.
//
// Примеры (ввод ==> вывод):
// "Robin Singh" ==> ["Robin", "Singh"]
// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

function stringToArray(string){
    return string.split(" ");
}

console.log(stringToArray("I love arrays they are my favorite"));