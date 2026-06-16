// Каждому начинающему хакеру нужен псевдоним! The Phantom Phreak, Acid Burn,
// Zero Cool и Crash Override — яркие примеры из фильма Hackers.
//
// Ваша задача — создать функцию, которая по имени и фамилии пользователя вернет правильный псевдоним.
//
//     Примечания:
// Уже заданы два объекта, которые возвращают однословное имя в ответ на первую букву
// имени и первую букву фамилии. Подробнее см. в примерах ниже.
//
// Если первый символ в любом из имен, переданных в функцию, не является буквой из A - Z,
// вы должны вернуть "Your name must start with a letter from A - Z."
//
// Иногда люди забывают писать первую букву своего имени с заглавной,
// поэтому ваша функция должна учитывать эти грамматические ошибки.

function aliasGen(first, last){
    let firstLetterFirst = first[0].toUpperCase();
    let firstLetterLast = last[0].toUpperCase();

    if(!/^[A-Z]$/.test(firstLetterFirst) || !/^[A-Z]$/.test(firstLetterLast)){
        return "Your name must start with a letter from A - Z.";
    } else {
        return `${firstName[firstLetterFirst]} ${surname[firstLetterLast]}`;
    }
}