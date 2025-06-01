// Описание:
// Удалите восклицательный знак в конце строки. Для начинающих можно считать,
// что входные данные всегда представляют собой строку, и не нужно их проверять.
//
//     Примеры
// "Hi!" ---> "Hi"
// "Hi!!!" ---> "Hi!!"
// "!Hi" ---> "!Hi"
// "!Hi!" ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi" ---> "Hi"

function remove (string) {

    let arr = string.split('');
    if(arr[arr.length - 1] === '!') {
        arr.splice(arr.length - 1, 1);
    }
    return arr.join('');

}

console.log(remove("Hi! Hi!!"))