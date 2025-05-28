// Описание:
// Замените все гласные в предложении на восклицательный знак.
// aeiouAEIOU — это гласная.
//
//     Примеры
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

function replace(s) {
     let arr = s.split('');
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === "a" || arr[i] === "e" ||
            arr[i] === "i" || arr[i] === "o" ||
            arr[i] === "u" || arr[i] === "A" ||
            arr[i] === "E" || arr[i] === "I" ||
            arr[i] === "O" || arr[i] === "U"
          ){
           arr.splice(i,1,"!");
        }
    }
    return arr.join('');
}

console.log(replace("!Hi! Hi!"));