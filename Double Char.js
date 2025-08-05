// Вам дана строка, и вы должны вернуть строку, в которой каждый символ (с учётом регистра)
// повторяется один раз.
//
// Примеры (ввод —> вывод):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Удачи вам!

function doubleChar(str) {
    let str1 = '';
    for(let i = str.length - 1; i >= 0; i--){
        str1 = str[i] + str[i] + str1;
    }
    return str1;
}

console.log(doubleChar("String"));
