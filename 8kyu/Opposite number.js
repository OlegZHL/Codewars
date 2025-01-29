// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Очень просто: дано число (целое / десятичное / оба варианта в зависимости от языка), найдите противоположное ему (аддитивно обратное).


let number = 101;

function opposite(number){

    let reverseNumber;

    if(number < 0 || number > 0){
        reverseNumber = number * (-1);
    return reverseNumber;
    } else {
        return number;
    }
}

opposite(number);
console.log(opposite(number));