// Дополните функцию, которая преобразует шестнадцатеричное число
// (заданное в виде строки) в десятичное число.

function hexToDec(hexString){
    let sum = 0;
    let hex = hexString.toUpperCase().split('').reverse();
    for(let i = 0; i < hex.length; i++) {
        if (hex[i] === '1' || hex[i] === '2' || hex[i] === '3' ||
            hex[i] === '4' || hex[i] === '5' || hex[i] === '6' || hex[i] === '7' ||
            hex[i] === '8' || hex[i] === '9'){
            sum += (+hex[i]) * (16 ** i);
        } else if(hex[i] ==='A'){
            sum+= 10*(16**[i]);
        } else if(hex[i] ==='B'){
            sum+= 11*(16**[i]);
        } else if(hex[i] ==='C'){
            sum+= 12*(16**[i]);
        } else if(hex[i] ==='D'){
            sum+= 13*(16**[i]);
        } else if(hex[i] ==='E'){
            sum+= 14*(16**[i]);
        } else if(hex[i] ==='F'){
            sum+= 15*(16**[i]);
        } else if(hex[i] ==='-'){
            sum*=-1;
        }
    }
return sum;
}

console.log(hexToDec('-2F3a'));