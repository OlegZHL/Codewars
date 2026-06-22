// Ваша задача — реализовать простой интерпретатор пресловутого
// эзотерического языка HQ9+, который будет работать с односимвольным вводом:
//
// Если ввод 'H', верните 'Hello World!'
// Если ввод 'Q', верните ввод
// Если ввод '9', верните полный текст песни 99 Bottles of Beer.
// Он должен быть отформатирован следующим образом:

// 99 bottles of beer on the wall, 99 bottles of beer.
//     Take one down and pass it around, 98 bottles of beer on the wall.
// 98 bottles of beer on the wall, 98 bottles of beer.
//     Take one down and pass it around, 97 bottles of beer on the wall.
// 97 bottles of beer on the wall, 97 bottles of beer.
//     Take one down and pass it around, 96 bottles of beer on the wall.
// ...
// ...
// ...
// 2 bottles of beer on the wall, 2 bottles of beer.
//     Take one down and pass it around, 1 bottle of beer on the wall.
// 1 bottle of beer on the wall, 1 bottle of beer.
//     Take one down and pass it around, no more bottles of beer on the wall.
//     No more bottles of beer on the wall, no more bottles of beer.
//     Go to the store and buy some more, 99 bottles of beer on the wall.
//
// Во всех остальных случаях ничего не возвращайте (return null в C#, None в Rust и "" в Haskell).
// (+ не имеет видимых эффектов, поэтому мы можем спокойно его игнорировать.)

function HQ9(code) {
    let result = "99 bottles of beer on the wall, 99 bottles of beer.\n" +
        "Take one down and pass it around, 98 bottles of beer on the wall.\n";

    let word = "2 bottles of beer on the wall, 2 bottles of beer.\n" +
        "Take one down and pass it around, 1 bottle of beer on the wall.\n" +
        "1 bottle of beer on the wall, 1 bottle of beer.\n" +
        "Take one down and pass it around, no more bottles of beer on the wall.\n" +
        "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.";

    if(code === "H"){
        return "Hello World!";
    } else if(code === "Q"){
        return code;
    } else if(code === '9'){
        let i = 98;
        while(i > 2){
            result +=`${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
            result +=`Take one down and pass it around, ${i-1} bottles of beer on the wall.\n`;
            i--;
        }
        return result + word;
    } else {
        return undefined;
    }
}

console.log(HQ9('9'));
