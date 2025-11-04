// Дан массив логических значений и логический оператор.
// Верните логическое значение, полученное в результате последовательного
// применения оператора к значениям в массиве.
//
// Примеры
// логические значения = [True, True, False], оператор = "AND"
// True AND True -> True
// True AND False -> False
// Возврат False
// логические значения = [True, True, False], оператор = "OR"
// True OR True -> True
// True OR False -> True
// Возврат True
// логические значения = [True, True, False], оператор = "XOR"
// True XOR True -> False
// False XOR False -> False
// Возврат False
// Входные данные
// массив логических значений (1 <= array_length <= 50)
// строка, указывающая на логический оператор: "AND", "OR", "XOR"
// Выходной сигнал
// Логическое значение (True или False).

function logicalCalc(array, op){
    let result = array[0];
    for (let i = 1; i < array.length; i++){
        if (op === "AND"){
            result = result && array[i];
        } else if (op === "OR"){
            result = result || array[i];
        } else if (op === "XOR"){
            result = result !== array[i];
        }
    }
    return result;
}

console.log(logicalCalc([true, true, true, false], "AND"));