// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo"
// name + " does not play banjo"
// Names given are always valid strings.

// Создайте функцию, которая отвечает на вопрос «Вы играете на банджо?».
// Если ваше имя начинается на букву «Р» или строчную «р», вы играете на банджо!

// Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

// name + " plays banjo"
// name + " does not play banjo"
// Приведенные имена всегда являются допустимыми строками.

function areYouPlayingBanjo(name) {
    return (name[0] === "R" || name[0] === "r") ? name + " plays banjo" : name + " does not play banjo";
}

console.log(areYouPlayingBanjo("Rodion"));
