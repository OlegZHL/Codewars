// Описание:
// Дана строка произвольной длины, состоящая из любых символов ASCII.
// Напишите функцию, которая определяет, содержит ли строка слово «English» целиком.
//
// Порядок символов важен: строка «abcEnglishdef» верна, а «abcnEglishsef» — нет.
//
// Прописная или строчная буква не имеет значения — «eNglisH» тоже правильно.
//
// Возвращаемое значение — логическое: true, если строка содержит «English», и false, если не содержит.


function spEng(sentence){
 let word = 'english';
 return (sentence.toLowerCase().match(word) !== null);
}

console.log(spEng("abcEnglishdef"));
