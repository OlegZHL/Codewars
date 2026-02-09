// Вам нужно написать функцию pattern которая возвращает следующий шаблон для n количества строк.
//
//    Примечание:Returning узор отличается от Printing этого узора.
//    Правила/Примечание:
//    Если n < 1 то должно вернуться "", то есть пустая строка.
//    Есть no whitespaces
// Узор:
//     1
//     22
//     333
//     ....
//     .....
//     nnnnnn

function pattern(n){
    let output = "";
    let i = 2;
    if(n < 1){
        return output;
    } else {
        output+=1;
        while(i<=n){
            output+="\n"+i;
            let k = i-1;
            while(k>0){
                output+=i;
                k--;
            }
            i++;
        }
    }
    return output;
}

console.log(pattern(5));