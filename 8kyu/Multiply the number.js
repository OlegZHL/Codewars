// Джеку очень нравится его пятёрка: хитрость в том, что нужно умножить каждое число на 5 в степени,
// равной количеству цифр в каждом числе. Например:
//
// 3 -->    15  (  3 * 5¹)
// 10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
// 0 -->     0  (  0 * 5¹)
// -3 -->   -15  ( -3 * 5¹)

function multiply(number){
    let lengthStr;
    if(number >= 0){
        lengthStr = number.toString().length;
    } else {
        lengthStr = (-1*number).toString().length;
    }
    return number*(5**lengthStr);
}

console.log(multiply(200));