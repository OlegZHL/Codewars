// Complete the solution so that it reverses the string passed into it.

// Завершите решение так, чтобы оно перевернуло переданную в него строку.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

let str = 'word';

function solution(str){
    let str1 = "";

    for(i = str.length - 1; i >=0; i--){
        str1 += str[i];
    }
    return str1;
}

solution(str);
console.log(solution(str));

