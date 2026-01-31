// Задача: напишите функцию, которая возвращает True,
// если только ОДИН из логических флагов равен True,
// в противном случае возвращает False.
// Если логических флагов нет, возвращает False
//
// Входные данные	Ожидаемый результат
//     []	False
//     [True, False, False]	True
//     [True, False, False, True]	False
//     [False, False, False, False]	False

function onlyOne(...items){
    let count = 0;
    for( let i = 0 ; i < items.length ; i++ ){
        if(items[i] === true){
            count++;
        }
    }
    return (count === 1);
}

console.log(onlyOne(false, false, true, true));