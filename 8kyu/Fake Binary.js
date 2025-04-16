// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

// Данную строку цифр необходимо заменить на '0' для всех цифр меньше 5 и на '1' для всех цифр от 5 и выше. Вернуть полученную строку.

// Примечание: входные данные никогда не будут пустой строкой

function fakeBin(x){
    let num = "";
    for(let i = 0; i < x.length; i++){
        if( +x[i] < 5 ){
            num += "0";
        } else if( +x[i] >= 5 ){
            num += "1";
    }
}
    return num;
}

console.log(fakeBin('45385593107843568'));