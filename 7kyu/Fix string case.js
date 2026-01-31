// В этом задании вам будет дана строка, в которой могут встречаться как прописные,
// так и строчные буквы.
// Ваша задача — преобразовать эту строку либо в строчные, либо в прописные буквы в зависимости от:
//
//     внесите как можно меньше изменений.
//     если в строке одинаковое количество букв в верхнем и нижнем регистре,
//     преобразуйте строку в нижний регистр.
//     Например:
//
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
//     Дополнительные примеры в тестовых заданиях. Удачи!

function solve(s){
    let upperC = 0;
    let lowerC= 0;
    for (let i = 0; i < s.length; i++){
        (s[i] === s[i].toUpperCase())?upperC++:lowerC++;
    }
    return (lowerC >= upperC?s.toLowerCase():s.toUpperCase());
}

console.log(solve("coDE"));