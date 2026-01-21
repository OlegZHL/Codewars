// В этом небольшом задании вам дана строка чисел, разделённых пробелами,
// и вам нужно найти самое большое и самое маленькое число.
//
//     Примеры
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"


function highAndLow(numbers){
    let arr = numbers.split(' ');
    let max = Number(arr[0]);
    let min = Number(arr[0]);

    for (let i = 1; i < arr.length; i++){
        if(max < Number(arr[i])){
            max = Number(arr[i]);
        }
    }

    for (let i = 1; i < arr.length; i++){
        if(min > Number(arr[i])){
            min = Number(arr[i]);
        }
    }
    return `${max} ${min}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));