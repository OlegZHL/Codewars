// В польском алфавите 32 буквы: 9 гласных и 23 согласных.
//
// Ваша задача — заменить буквы диакритическими знаками:
//
//         ą -> a,
//         ć -> c,
//         ę -> e,
//         ł -> l,
//         ń -> n,
//         ó -> o,
//         ś -> s,
//         ź -> z,
//         ż -> z
// и выведите строку без польских букв.
//
// Например:
//
// "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"

function correctPolishLetters (string) {
    let result = [];
    let str = string.split("");
    str.forEach(item => {
        if(item === "ą"){
            result.push("a");
        } else if( item === "ć"){
            result.push("c");
        } else if( item === "ę"){
            result.push("e");
        } else if( item === "ł"){
            result.push("l");
        } else if( item === "ń"){
            result.push("n");
        } else if( item === "ó"){
            result.push("o");
        } else if( item === "ś"){
            result.push("s");
        } else if( item === "ź"){
            result.push("z");
        } else if( item === "ż") {
            result.push("z");
        } else{
            result.push(item);
        }
    });
    return result.join("");
}

console.log(correctPolishLetters("Jędrzej Błądziński"));