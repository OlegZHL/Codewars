// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false 
// (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.


// Кодировка в функции trueOrFalse, функция принимает 1 параметр:val, попробуйте использовать условный оператор if...else, если значение 
// val равно false (val==false или может быть преобразовано в false), должна быть возвращена строка «false», если нет, верните строку «true».

// Когда вы закончите работу, нажмите «Запустить тесты», чтобы проверить, правильно ли работает ваш код.

// В конце нажмите «Отправить», чтобы отправить свой код и пройти это задание.

let a = 1;
let b = 2;
let c = 1;

function trueOrFalse(val){
        if ( val === true ){  
                return "true";
        } else if ( val === false){
                return "false";
        } else if ( val === 0){
                return "false";
        } else if ( val === -0){
                return "false";
        } else if ( val === ""){
                return "false";
        } else if ( val === null){
                return "false";
        } else if ( val === undefined){
                return "false";
        } else if ( val === NaN){
                return "false";
        } else {
                return "true";
        }
    } 

    let val = b > c;

    console.log(trueOrFalse(val));

